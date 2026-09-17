' Existing-session inspection only. No SAP input, navigation, save, or logon.
' Source: SAP GUI Scripting API 8.00 PL01, pp. 85-87, 195, 203-206, 317-318.
' https://help.sap.com/doc/9215986e54174174854b0af6bb14305a/800.01/en-US/sap_gui_scripting_api.pdf
' Windows/SAP execution has not been verified in the authoring environment.
Option Explicit

Dim args, connectionIndex, sessionIndex, expectedSystem, expectedClient, expectedUser
Dim sapGuiAuto, sapApp, connection, session, info, startedAt, attachError

Set args = WScript.Arguments
If args.Count <> 5 Then
    Fail "Usage: cscript //nologo inspect-session.vbs CON_INDEX SES_INDEX SYSTEM CLIENT USER", 2
End If

connectionIndex = ParseIndex(args(0))
sessionIndex = ParseIndex(args(1))
expectedSystem = Trim(args(2))
expectedClient = Trim(args(3))
expectedUser = Trim(args(4))
If Len(expectedSystem) = 0 Or Len(expectedClient) = 0 Or Len(expectedUser) = 0 Then
    Fail "SYSTEM, CLIENT and USER must not be empty.", 2
End If

' Capture only the attachment error. All later unhandled COM errors abort execution.
On Error Resume Next
Set sapGuiAuto = GetObject("SAPGUI")
attachError = Err.Number
On Error GoTo 0
If attachError <> 0 Then Fail "Cannot attach to a running SAP GUI process.", 3

On Error Resume Next
Err.Clear
Set sapApp = sapGuiAuto.GetScriptingEngine
attachError = Err.Number
On Error GoTo 0
If attachError <> 0 Then Fail "Cannot obtain the SAP GUI Scripting engine.", 3

If connectionIndex >= sapApp.Children.Count Then Fail "Connection index does not exist.", 4
Set connection = sapApp.Children(connectionIndex)
If connection.DisabledByServer Then Fail "Scripting is disabled for this connection.", 4
If sessionIndex >= connection.Children.Count Then Fail "Session index does not exist.", 4
Set session = connection.Children(sessionIndex)

' This deadline bounds polling, not a COM call that is itself blocked.
startedAt = Now
Do While session.Busy
    If DateDiff("s", startedAt, Now) >= 15 Then Fail "Session remained busy. No action taken.", 5
    WScript.Sleep 100
Loop

Set info = session.Info
If StrComp(info.SystemName, expectedSystem, vbTextCompare) <> 0 Then
    Fail "System identity mismatch. No action taken.", 6
End If
If CStr(info.Client) <> expectedClient Then Fail "Client identity mismatch. No action taken.", 6
If StrComp(info.User, expectedUser, vbTextCompare) <> 0 Then
    Fail "User identity mismatch. No action taken.", 6
End If

WScript.Echo "Session identity verified: " & session.Id
WScript.Echo "Current transaction: " & info.Transaction
WScript.Echo "Scripting read-only mode: " & CStr(CBool(info.ScriptingModeReadOnly))
WScript.Quit 0

Function ParseIndex(ByVal raw)
    Dim value
    If Not IsNumeric(raw) Then Fail "Indices must be non-negative integers.", 2
    value = CDbl(raw)
    If value < 0 Or value > 2147483647 Then Fail "Index is out of range.", 2
    If value <> Fix(value) Then Fail "Indices must be integers.", 2
    ParseIndex = CLng(value)
End Function

Sub Fail(ByVal message, ByVal exitCode)
    WScript.Echo "ERROR: " & message
    WScript.Quit exitCode
End Sub
