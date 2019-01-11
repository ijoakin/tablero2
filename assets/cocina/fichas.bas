Attribute VB_Name = "BasSpriteData"
'Created with MapMaker - ©1998 Lars-Hakan Jonsson
'Date: 05/05/2006

Option Explicit

Public Type MapRect
    Key As String
    X As Long
    Y As Long
    Width As Long
    Height As Long
End Type

Public SpriteData(14) As MapRect

Sub LoadSpriteData()

    SpriteData(0).Key = "f1"
    SpriteData(0).X = 0
    SpriteData(0).Y = 0
    SpriteData(0).Width = 1125
    SpriteData(0).Height = 1125
    SpriteData(1).Key = "f2"
    SpriteData(1).X = 1125
    SpriteData(1).Y = 0
    SpriteData(1).Width = 1125
    SpriteData(1).Height = 1125
    SpriteData(2).Key = "f3"
    SpriteData(2).X = 142
    SpriteData(2).Y = 0
    SpriteData(2).Width = 1125
    SpriteData(2).Height = 1125
    SpriteData(3).Key = "f4"
    SpriteData(3).X = 213
    SpriteData(3).Y = 0
    SpriteData(3).Width = 1125
    SpriteData(3).Height = 1125
    SpriteData(4).Key = "f5"
    SpriteData(4).X = 284
    SpriteData(4).Y = 0
    SpriteData(4).Width = 1125
    SpriteData(4).Height = 1125
    SpriteData(5).Key = "f6"
    SpriteData(5).X = 355
    SpriteData(5).Y = 0
    SpriteData(5).Width = 1125
    SpriteData(5).Height = 1125
    SpriteData(6).Key = "f7"
    SpriteData(6).X = 426
    SpriteData(6).Y = 0
    SpriteData(6).Width = 1125
    SpriteData(6).Height = 1125
    SpriteData(7).Key = "f8"
    SpriteData(7).X = 497
    SpriteData(7).Y = 0
    SpriteData(7).Width = 1125
    SpriteData(7).Height = 1125
    SpriteData(8).Key = "f9"
    SpriteData(8).X = 568
    SpriteData(8).Y = 0
    SpriteData(8).Width = 1125
    SpriteData(8).Height = 1125
    SpriteData(9).Key = "f10"
    SpriteData(9).X = 639
    SpriteData(9).Y = 0
    SpriteData(9).Width = 1125
    SpriteData(9).Height = 1125
    SpriteData(10).Key = "f11"
    SpriteData(10).X = 11250
    SpriteData(10).Y = 0
    SpriteData(10).Width = 1125
    SpriteData(10).Height = 1125
    SpriteData(11).Key = "f12"
    SpriteData(11).X = 781
    SpriteData(11).Y = 0
    SpriteData(11).Width = 1125
    SpriteData(11).Height = 1125
    SpriteData(12).Key = "f13"
    SpriteData(12).X = 852
    SpriteData(12).Y = 0
    SpriteData(12).Width = 1125
    SpriteData(12).Height = 1125
    SpriteData(13).Key = "f14"
    SpriteData(13).X = 923
    SpriteData(13).Y = 0
    SpriteData(13).Width = 1125
    SpriteData(13).Height = 1125
    SpriteData(14).Key = "f15"
    SpriteData(14).X = 0
    SpriteData(14).Y = 72
    SpriteData(14).Width = 1125
    SpriteData(14).Height = 1125

End Sub
