# Festival profiles

Switch the active festival from PowerShell:

```powershell
.\src\data\festivals\switch-festival.ps1 ziro
.\src\data\festivals\switch-festival.ps1 hornbill
```

Run those commands from the project root. The first command activates Ziro; the second activates Hornbill.

The profiles are stored in `ziro.ts` and `hornbill.ts`. Keep their fields in sync with `types.ts` when adding another festival.
