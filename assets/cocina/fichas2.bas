Attribute VB_Name = "BasSpriteData"
'Created with MapMaker - ©1998 Lars-Hakan Jonsson
'Date: 05/05/2006

Option Explicit

Public Type MapRect
    Key As String
    x As Long
    y As Long
    Width As Long
    Height As Long
End Type

Public SpriteData(13) As MapRect

Sub LoadSpriteData()

    SpriteData(0).Key = "f1"
    SpriteData(0).x = 0
    SpriteData(0).y = 0
    SpriteData(0).Width = 1125
    SpriteData(0).Height = 1125
    
    SpriteData(1).Key = "f2"
    SpriteData(1).x = 1125
    SpriteData(1).y = 0
    SpriteData(1).Width = 1125
    SpriteData(1).Height = 1125
    
    SpriteData(2).Key = "f3"
    SpriteData(2).x = 1125 * 2
    SpriteData(2).y = 0
    SpriteData(2).Width = 1125
    SpriteData(2).Height = 1125
    
    SpriteData(3).Key = "f4"
    SpriteData(3).x = 1125 * 3
    SpriteData(3).y = 0
    SpriteData(3).Width = 1125
    SpriteData(3).Height = 1125
    
    SpriteData(4).Key = "f5"
    SpriteData(4).x = 1125 * 4
    SpriteData(4).y = 0
    SpriteData(4).Width = 1125
    SpriteData(4).Height = 1125
    
    SpriteData(5).Key = "f6"
    SpriteData(5).x = 1125 * 5
    SpriteData(5).y = 0
    SpriteData(5).Width = 1125
    SpriteData(5).Height = 1125
    
    SpriteData(6).Key = "f7"
    SpriteData(6).x = 1125 * 6
    SpriteData(6).y = 0
    SpriteData(6).Width = 1125
    SpriteData(6).Height = 1125
    
    SpriteData(7).Key = "f8"
    SpriteData(7).x = 1125 * 7
    SpriteData(7).y = 0
    SpriteData(7).Width = 1125
    SpriteData(7).Height = 1125
    
    SpriteData(8).Key = "f9"
    SpriteData(8).x = 1125 * 8
    SpriteData(8).y = 0
    SpriteData(8).Width = 1125
    SpriteData(8).Height = 1125
    
    SpriteData(9).Key = "f10"
    SpriteData(9).x = 1125 * 9
    SpriteData(9).y = 0
    SpriteData(9).Width = 1125
    SpriteData(9).Height = 1125
    
    SpriteData(10).Key = "f11"
    SpriteData(10).x = 1125 * 10
    SpriteData(10).y = 0
    SpriteData(10).Width = 1125
    SpriteData(10).Height = 1125
    
    SpriteData(11).Key = "f12"
    SpriteData(11).x = 1125 * 11
    SpriteData(11).y = 0
    SpriteData(11).Width = 1125
    SpriteData(11).Height = 1125
    
    SpriteData(12).Key = "f13"
    SpriteData(12).x = 1125 * 12
    SpriteData(12).y = 0
    SpriteData(12).Width = 1125
    SpriteData(12).Height = 1125
    
    SpriteData(13).Key = "f14"
    SpriteData(13).x = 1125 * 13
    SpriteData(13).y = 0
    SpriteData(13).Width = 1125
    SpriteData(13).Height = 1125

End Sub
