"""Focused checks for common skill packaging; never execute a target codebase."""
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
import check_skills
import install


class SkillPackagingTest(unittest.TestCase):
    def test_valid_skill_and_broken_reference_and_metadata(self):
        with tempfile.TemporaryDirectory() as temporary:
            skill = Path(temporary) / 'example'
            (skill / 'agents').mkdir(parents=True)
            (skill / 'SKILL.md').write_text('---\nname: example\ndescription: Example validation fixture.\n---\n[Guide](guide.md)\n```md\n[Example](not-created.md)\n```\n')
            (skill / 'guide.md').write_text('[Back](SKILL.md)\n')
            (skill / 'agents/openai.yaml').write_text('interface:\n  display_name: "Example"\n  short_description: "A focused packaging validation fixture"\n  default_prompt: "Use $example to check a fixture."\npolicy:\n  allow_implicit_invocation: false\n')
            self.assertEqual(check_skills.check_skill(skill)['errors'], [])
            (skill / 'guide.md').write_text('[Missing](missing.md)\n')
            errors = check_skills.check_skill(skill)['errors']
            self.assertEqual(len(errors), 1)
            self.assertIn('missing.md', errors[0]['message'])
            (skill / 'agents/openai.yaml').write_text('interface: null\n')
            self.assertEqual(len(check_skills.check_skill(skill)['errors']), 2)

    def test_missing_source_and_collision_leave_no_partial_install(self):
        with tempfile.TemporaryDirectory() as temporary:
            root, project = Path(temporary) / 'tool', Path(temporary) / 'project'
            (root / 'skills/first').mkdir(parents=True)
            (root / 'skills/first/SKILL.md').write_text('first')
            with patch.object(install, 'ROOT', root), patch.object(install, 'SKILLS', ('first', 'second')), patch.object(install, 'AGENTS', ()):
                args = ['--scope', 'project', '--project', str(project)]
                with self.assertRaises(ValueError):
                    install.main(args)
                self.assertFalse(project.exists())
                (root / 'skills/second').mkdir()
                (root / 'skills/second/SKILL.md').write_text('second')
                existing = project / '.agents/skills/second'
                existing.mkdir(parents=True)
                (existing / 'SKILL.md').write_text('user owned')
                with self.assertRaises(ValueError):
                    install.main(args)
                self.assertFalse((project / '.agents/skills/first').exists())
                self.assertEqual((existing / 'SKILL.md').read_text(), 'user owned')


if __name__ == '__main__':
    unittest.main()
