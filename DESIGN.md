---

name: CXA Design System

colors:

  purple-navy: "#3f4373"
  blue-bell: "#9498C5"
  liberty: "#5E66A8"
  purple-space: "#2F3256"
  
  middle-blue: "#61C8D7"
  powder-blue: "#B0E1EB"
  blue-munsell: "#288C9C"
  myrtle-green: "#326870"
  
  orange: "#ED693A"
  misty-rose: "#F9D2C9"
  copper-red: "#CE724F"
  kobe: "#862E1B"
  
  linen: "#F8EFE3"
  timberwolf: "#E1DAD0"
  pale-silver: "#C5C0B6"
  grullo: "#A59080"
  
  lavender-gray: "#D5D0DA"
  taupe-gray: "#88818B"
  dark-liver: "#534D56"
  jet: "#333333"
  
  success: "#10a64a"
  success-light: "#10A64A1A"
  success-dark: "#068039"
  
  warning: "#ffcc33"
  warning-light: "#FFCC331A"
  warning-dark: "#D9A521"
  
  error: "#CC1F36"
  error-light: "#CC1F361A"
  error-dark: "#A61129"
  error-selected: "#CC1F369F"
  error-active: "rgba(204, 31, 54, 0.3)"
  
  info: "{colors.middle-blue}"
  info-light: "#61D8D71A"
  info-dark: "#469eb0"
  option-selected-bg: "rgba(97, 200, 215, 0.2)"
  option-active-bg: "rgba(97, 200, 215, 0.07)"

  primary: "{colors.purple-navy}"
  primary-active: "#20223A"
  primary-bg: "#3f43734d"
  primary-selected-bg: "rgba(63, 67, 115, 0.5)"
  secondary: "{colors.liberty}"
  
  background: "#F0F2F5"
  surface: "#FFFFFF"
  surface-secondary: "#F5F5F5"
  field-disabled: "{colors.surface-secondary}"
  table-header: "#EBECFA"

  text: "#000000"
  text-secondary: "{colors.jet}"
  text-placeholder: "#616161"
  text-disabled: "rgba(51, 51, 51, 0.3)"
  text-disabled-placeholder: "rgba(51, 51, 51, 0.2)"

  border: "{colors.lavender-gray}"
  border-light: "#F0F0F0"
  border-strong: "{colors.purple-navy}"

  focus: "{colors.middle-blue}"
  overlay: "rgba(0, 0, 0, 0.45)"

typography:

  h1:
    fontFamily: "Poppins, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0em"

  h2:
    fontFamily: "Libre Franklin, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0em"

  h3:
    fontFamily: "Libre Franklin, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0em"

  h4:
    fontFamily: "Libre Franklin, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0em"

  h5:
    fontFamily: "Libre Franklin, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"

  body-lg:
    fontFamily: "Libre Franklin, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"

  body-md:
    fontFamily: "Libre Franklin, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"

  body-sm:
    fontFamily: "Libre Franklin, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"

  caption:
    fontFamily: "Libre Franklin, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: "0em"

  label:
    fontFamily: "Libre Franklin, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0em"

rounded:

  none: "0px"
  xs: "2px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  pill: "9999px"
  circle: "9999px"

spacing:

  none: "0px"
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "40px"
  3xl: "48px"
  4xl: "64px"

shadows:

  sm: "0 1px 4px rgba(0, 0, 0, 0.12)"

components:

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
    height: "{spacing.2xl}"

  button-primary-hover:
    backgroundColor: "{colors.secondary}"

  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
    height: "{spacing.2xl}"

  button-disabled:
    backgroundColor: "{colors.field-disabled}"
    textColor: "{colors.text-disabled}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
    height: "{spacing.2xl}"
  
  button-danger:
    backgroundColor: "{colors.error}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
    height: "{spacing.2xl}"

  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
    height: "{spacing.2xl}"

  button-primary-bg:
    backgroundColor: "{colors.primary-bg}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
    height: "{spacing.2xl}"

  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "0 {spacing.md}"
    height: "{spacing.2xl}"

  select:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "0 {spacing.md}"
    height: "{spacing.2xl}"

  input-placeholder:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-placeholder}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "0 {spacing.md}"
    height: "{spacing.2xl}"

  input-disabled-placeholder:
    backgroundColor: "{colors.surface-secondary}"
    textColor: "{colors.text-disabled-placeholder}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "0 {spacing.md}"
    height: "{spacing.2xl}"

  select-option-selected:
    backgroundColor: "{colors.option-selected-bg}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"

  select-option-active:
    backgroundColor: "{colors.option-active-bg}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"

  textarea:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "{spacing.sm} {spacing.md}"

  checkbox:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"

  radio:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"

  switch:
    backgroundColor: "{colors.border-light}"
    textColor: "{colors.primary}"

  modal:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"

  drawer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"

  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "{spacing.lg}"

  table:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"

  table-header:
    backgroundColor: "{colors.table-header}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-md}"

  table-row-striped:
    backgroundColor: "{colors.surface-secondary}"

  table-row-sorted:
    backgroundColor: "{colors.surface}"

  menu:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"

  menu-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"

  menu-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    padding: "{spacing.lg} {spacing.lg}"

  menu-item-selected:
    backgroundColor: "{colors.primary-selected-bg}"
    textColor: "{colors.surface}"

  tabs:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-md}"
    padding: "{spacing.sm} {spacing.md}"

  tag:
    backgroundColor: "{colors.surface-secondary}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "0 {spacing.xs}"

  badge:
    backgroundColor: "{colors.error}"
    textColor: "{colors.surface}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "0 {spacing.xs}"

  alert:
    backgroundColor: "{colors.surface-secondary}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"

  alert-error:
    backgroundColor: "{colors.error-light}"
    textColor: "{colors.error}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"

  alert-info:
    backgroundColor: "{colors.info-light}"
    textColor: "{colors.info}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"

  alert-success:
    backgroundColor: "{colors.success-light}"
    textColor: "{colors.success}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"

  alert-warning:
    backgroundColor: "{colors.warning-light}"
    textColor: "{colors.warning}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"

  alert-success-dark:
    backgroundColor: "{colors.success-dark}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"

  alert-warning-dark:
    backgroundColor: "{colors.warning-dark}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"

  alert-error-dark:
    backgroundColor: "{colors.error-dark}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"

  alert-info-dark:
    backgroundColor: "{colors.info-dark}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"

  tooltip:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"

  popover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"

  dropdown:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"

  pagination:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-sm}"

  breadcrumb:
    backgroundColor: "transparent"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-sm}"

  menu-danger-selected:
    backgroundColor: "{colors.error-selected}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"

  menu-danger-active:
    backgroundColor: "{colors.error-active}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"

  border-swatch:
    backgroundColor: "{colors.border}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-md}"

  overlay-swatch:
    backgroundColor: "{colors.overlay}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"

  form:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-md}"

  datepicker:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"

  divider:
    backgroundColor: "{colors.border-light}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-md}"

  result-title:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.h3}"

  link:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"

  link-hover:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"

  steps-wait:
    backgroundColor: "{colors.border-light}"
    textColor: "{colors.text-secondary}"

  steps-process:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"

extensions:

  antDesign:

    seedTokens:

      colorPrimary: "{colors.primary}"
      colorSuccess: "{colors.success}"
      colorWarning: "{colors.warning}"
      colorError: "{colors.error}"
      colorInfo: "{colors.info}"

      borderRadius: 2

      fontFamily: "Libre Franklin, sans-serif"

      fontSize: 14

      controlHeight: 40

      lineWidth: 1

      motion: "0.2s ease"

      colorBgBase: "{colors.surface-secondary}"
      colorBgContainer: "{colors.surface}"
      colorBgLayout: "{colors.background}"
      colorText: "{colors.text}"
      colorTextSecondary: "{colors.text-secondary}"
      colorTextDisabled: "{colors.text-disabled}"
      colorBorder: "{colors.border}"

    aliasTokens:

      colorBgContainer: "{colors.surface}"
      colorBgLayout: "{colors.background}"
      colorBgElevated: "{colors.surface}"
      colorText: "{colors.text}"
      colorTextSecondary: "{colors.text-secondary}"
      colorTextDisabled: "{colors.text-disabled}"
      colorBorder: "{colors.border}"
      colorBorderSecondary: "{colors.border-light}"
      colorFillAlter: "{colors.surface-secondary}"
      colorFillTertiary: "{colors.border-light}"
      colorPrimaryBg: "{colors.primary-bg}"
      colorPrimaryBorder: "{colors.primary}"
      colorSuccessBg: "{colors.success-light}"
      colorWarningBg: "{colors.warning-light}"
      colorErrorBg: "{colors.error-light}"
      colorInfoBg: "{colors.info-light}"

    componentTokens:

      Button:
        colorPrimary: "{colors.primary}"
        colorPrimaryHover: "{colors.secondary}"
        colorPrimaryActive: "{colors.primary-active}"
        colorPrimaryTextHover: "{colors.secondary}"
        colorErrorBg: "{colors.error}"
        colorErrorBorder: "{colors.error}"
        colorErrorText: "{colors.surface}"
        colorBgContainerDisabled: "{colors.surface-secondary}"
        colorTextDisabled: "{colors.text-secondary}"
        borderRadius: 8
        borderRadiusLG: 8
        borderRadiusSM: 6
        fontSizeLG: 18
        controlOutlineWidth: 0

      Input:
        colorTextPlaceholder: "{colors.text-placeholder}"
        colorTextLabel: "{colors.text-secondary}"
        colorBorder: "{colors.border}"
        colorBgContainerDisabled: "{colors.surface-secondary}"

      Select:
        optionSelectedBg: "{colors.option-selected-bg}"
        optionActiveBg: "{colors.option-active-bg}"
        colorBgContainer: "{colors.surface}"
        colorBorder: "{colors.border}"

      Table:
        headerBg: "{colors.table-header}"
        rowHoverBg: "{colors.surface-secondary}"
        rowSelectedBg: "{colors.surface}"
        colorBorderSecondary: "{colors.border-light}"

      Form:
        labelColor: "{colors.text-secondary}"
        colorError: "{colors.error}"

      Modal:
        contentBg: "{colors.surface}"
        headerBg: "{colors.surface}"
        borderRadiusLG: 6
        colorBgElevated: "{colors.surface}"

      Card:
        colorBorderSecondary: "{colors.border-light}"
        borderRadiusLG: 2
        boxShadowSecondary: "{shadows.sm}"

      Tabs:
        inkBarColor: "{colors.primary}"
        itemColor: "{colors.jet}"
        itemSelectedColor: "{colors.primary}"
        cardBg: "{colors.surface}"

      Menu:
        darkItemBg: "{colors.primary}"
        itemMarginInline: 0
        itemBg: "{colors.surface}"
        colorHighlight: "{colors.surface}"
        colorBgContainer: "{colors.surface}"
        itemColor: "{colors.primary}"
        itemSelectedColor: "{colors.surface}"
        itemActiveBg: "{colors.primary-selected-bg}"
        darkDangerItemColor: "{colors.error}"
        dangerItemColor: "{colors.error}"
        dangerItemSelectedBg: "{colors.primary}"
        darkDangerItemSelectedColor: "{colors.error}"
        darkDangerItemSelectedBg: "{colors.error-selected}"
        itemSelectedBg: "{colors.primary-selected-bg}"
        darkItemSelectedBg: "{colors.primary}"
        darkDangerItemActiveBg: "{colors.error-selected}"
        dangerItemActiveBg: "{colors.error-active}"
        fontSize: 14
        fontWeightStrong: 600
        itemHoverColor: "{colors.primary}"
        dangerItemHoverColor: "{colors.error}"

      Tag:
        defaultBg: "{colors.surface-secondary}"
        defaultColor: "{colors.jet}"
        borderRadiusSM: 9999

      Badge:
        colorError: "{colors.error}"
        textColor: "{colors.surface}"

      Tooltip:
        colorBgSpotlight: "{colors.primary}"
        colorTextLightSolid: "{colors.surface}"

      Drawer:
        colorBgElevated: "{colors.surface}"
        borderRadiusLG: 6

      Notification:
        colorBgElevated: "{colors.surface}"
        colorText: "{colors.text}"

      Pagination:
        itemActiveBg: "{colors.primary}"
        itemActiveColor: "{colors.surface}"

      DatePicker:
        cellActiveWithRangeBg: "{colors.option-selected-bg}"
        cellHoverBg: "{colors.option-active-bg}"

      Layout:
        colorBgHeader: "{colors.primary}"
        colorBgBody: "{colors.background}"

      Typography:
        colorLink: "{colors.primary}"
        colorLinkHover: "{colors.secondary}"

      Breadcrumb:
        fontSize: 12
        iconFontSize: 12

      Alert:
        colorErrorBg: "{colors.error-light}"
        colorErrorBorder: "{colors.error-dark}"
        colorError: "{colors.error}"
        colorIcon: "{colors.success}"
        colorWarningBg: "{colors.warning-light}"
        colorWarningBorder: "{colors.warning-dark}"
        colorWarning: "{colors.warning}"
        colorSuccessBg: "{colors.success-light}"
        colorSuccessBorder: "{colors.success-dark}"
        colorSuccess: "{colors.success}"
        colorInfoBg: "{colors.info-light}"
        colorInfoBorder: "{colors.info-dark}"
        colorInfo: "{colors.info}"

      Checkbox:
        colorPrimary: "{colors.primary}"

      Radio:
        controlHeight: 30

audit:

  allowInlineStyles: false

  allowImportant: false

  allowHardcodedColors: false

  allowHardcodedSpacing: false

  allowHardcodedTypography: false

  allowHardcodedRadius: false

  allowHardcodedShadow: false

  allowMagicNumbers: false

  report:

    unusedVariables: true

    duplicateVariables: true

    orphanedTokens: true

    inconsistentSpacing: true

    inconsistentTypography: true

    inconsistentBorderRadius: true

    inconsistentShadows: true

    duplicateColors: true

    overriddenAntTokens: true

    arbitraryCssValues: true

    excessiveSpecificity: true

    duplicateCss: true

    deadCss: true

    missingFocusStates: true

    inconsistentComponents: true
---

# Intealth CXA Design Guidelines

**Theme:** light

This file is the canonical source of truth for the CXA visual language. The front matter defines the machine-readable tokens, while the markdown body acts as the human reference for how those tokens should appear in the live product. Any visual value that does not resolve back to the tokens below should be treated as a deviation and reported.

## Tokens - Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Purple Navy | `#3f4373` | `colors.primary` | Core brand color, primary buttons, menu headers, selected states, link color |
| Liberty | `#5E66A8` | `colors.secondary` | Hover and secondary brand tone, lighter interaction state |
| Blue Bell | `#9498C5` | `colors.blue-bell` | Soft supporting brand tint for decorative or secondary emphasis |
| Purple Space | `#2F3256` | `colors.purple-space` | Dark brand surface for deep contrast contexts |
| Middle Blue | `#61C8D7` | `colors.middle-blue` | Info tone, focus tone, selected option wash |
| Powder Blue | `#B0E1EB` | `colors.powder-blue` | Pale info tint for subtle backgrounds |
| Blue Munsell | `#288C9C` | `colors.blue-munsell` | Stronger info accent for non-critical emphasis |
| Myrtle Green | `#326870` | `colors.myrtle-green` | Deep cool accent for chart or UI variation |
| Orange | `#ED693A` | `colors.orange` | Tertiary accent and warning-adjacent warm highlight |
| Misty Rose | `#F9D2C9` | `colors.misty-rose` | Warm pastel accent, rare background wash |
| Copper Red | `#CE724F` | `colors.copper-red` | Muted warm accent for illustration or chart strokes |
| Kobe | `#862E1B` | `colors.kobe` | Dark warm contrast color for accent-on-accent surfaces |
| Linen | `#F8EFE3` | `colors.linen` | Table header wash and soft surface tone |
| Timberwolf | `#E1DAD0` | `colors.timberwolf` | Neutral beige border or background support |
| Pale Silver | `#C5C0B6` | `colors.pale-silver` | Neutral mid-tone for understated separators |
| Grullo | `#A59080` | `colors.grullo` | Muted brown-gray for labels or tertiary text |
| Lavender Gray | `#D5D0DA` | `colors.border` | Default border color and primary neutral divider tone |
| Taupe Gray | `#88818B` | `colors.taupe-gray` | Secondary muted text or label tone |
| Dark Liver | `#534D56` | `colors.dark-liver` | Deep muted text for contrast on light surfaces |
| Jet | `#333333` | `colors.jet` | Primary readable body text and key labels |
| Success | `#10a64a` | `colors.success` | Success state color |
| Success Light | `#10A64A1A` | `colors.success-light` | Success background wash |
| Success Dark | `#068039` | `colors.success-dark` | Strong success border or icon color |
| Warning | `#ffcc33` | `colors.warning` | Warning state color |
| Warning Light | `#FFCC331A` | `colors.warning-light` | Warning background wash |
| Warning Dark | `#D9A521` | `colors.warning-dark` | Warning border or icon color |
| Error | `#CC1F36` | `colors.error` | Error state color and destructive action tone |
| Error Light | `#CC1F361A` | `colors.error-light` | Error background wash |
| Error Dark | `#A61129` | `colors.error-dark` | Error border or icon color |
| Error Selected | `#CC1F369F` | `colors.error-selected` | Selected-danger menu and state fill |
| Error Active | `rgba(204, 31, 54, 0.3)` | `colors.error-active` | Danger hover or active state wash |
| Info | `#61C8D7` | `colors.info` | Information state color |
| Info Light | `#61D8D71A` | `colors.info-light` | Info background wash |
| Info Dark | `#469eb0` | `colors.info-dark` | Info border or icon color |
| Primary Active | `#20223A` | `colors.primary-active` | Pressed primary state |
| Primary Bg | `#3f43734d` | `colors.primary-bg` | Soft primary background tint |
| Primary Selected Bg | `rgba(63, 67, 115, 0.5)` | `colors.primary-selected-bg` | 50% primary overlay for selected menu items |
| Surface | `#FFFFFF` | `colors.surface` | Default card and container background |
| Surface Secondary | `#F5F5F5` | `colors.surface-secondary` | Secondary surface and disabled fill |
| Background | `#F0F2F5` | `colors.background` | Page background |
| Table Header | `#EBECFA` | `colors.table-header` | Table header wash |
| Text | `#000000` | `colors.text` | High-contrast text token |
| Text Secondary | `#333333` | `colors.text-secondary` | Body and label text |
| Text Placeholder | `#616161` | `colors.text-placeholder` | Input placeholder tone |
| Text Disabled | `rgba(51, 51, 51, 0.3)` | `colors.text-disabled` | Disabled text tone |
| Text Disabled Placeholder | `rgba(51, 51, 51, 0.2)` | `colors.text-disabled-placeholder` | Disabled placeholder tone |
| Field Disabled | `#F5F5F5` | `colors.field-disabled` | Disabled field fill |
| Border Light | `#F0F0F0` | `colors.border-light` | Light divider and rail tone |
| Border Strong | `#3f4373` | `colors.border-strong` | Strong emphasis border |
| Focus | `#61C8D7` | `colors.focus` | Focus ring and accessible state color |
| Overlay | `rgba(0, 0, 0, 0.45)` | `colors.overlay` | Modal and drawer overlay |

## Tokens - Typography

### H1 - Poppins headline
- **Font family:** Poppins, sans-serif
- **Size:** 32px
- **Weight:** 600
- **Line height:** 1.2
- **Letter spacing:** 0em
- **Role:** Primary display headline for the strongest page title treatment

### H2 - Libre Franklin section headline
- **Font family:** Libre Franklin, sans-serif
- **Size:** 24px
- **Weight:** 600
- **Line height:** 1.25
- **Letter spacing:** 0em
- **Role:** Section title and elevated heading style

### H3 - Libre Franklin subsection headline
- **Font family:** Libre Franklin, sans-serif
- **Size:** 20px
- **Weight:** 500
- **Line height:** 1.3
- **Letter spacing:** 0em
- **Role:** Result titles, subsection emphasis, and prominent content labels

### H4 - Libre Franklin compact heading
- **Font family:** Libre Franklin, sans-serif
- **Size:** 16px
- **Weight:** 600
- **Line height:** 1.35
- **Letter spacing:** 0em
- **Role:** Compact heading and card title treatment

### H5 - Libre Franklin small heading
- **Font family:** Libre Franklin, sans-serif
- **Size:** 14px
- **Weight:** 400
- **Line height:** 1.4
- **Letter spacing:** 0em
- **Role:** Small heading or label-like heading treatment

### Body LG - Larger body copy
- **Font family:** Libre Franklin, sans-serif
- **Size:** 18px
- **Weight:** 400
- **Line height:** 1.5
- **Letter spacing:** 0em
- **Role:** Larger supporting copy and introductory content

### Body MD - Primary interface body
- **Font family:** Libre Franklin, sans-serif
- **Size:** 14px
- **Weight:** 400
- **Line height:** 1.5
- **Letter spacing:** 0em
- **Role:** Default body copy, forms, tables, and controls

### Body SM - Compact body copy
- **Font family:** Libre Franklin, sans-serif
- **Size:** 12px
- **Weight:** 400
- **Line height:** 1.4
- **Letter spacing:** 0em
- **Role:** Breadcrumbs, helper text, compact labels

### Caption - Supporting micro text
- **Font family:** Libre Franklin, sans-serif
- **Size:** 12px
- **Weight:** 400
- **Line height:** 1.33
- **Letter spacing:** 0em
- **Role:** Secondary metadata and small status text

### Label - Form and metadata label
- **Font family:** Libre Franklin, sans-serif
- **Size:** 14px
- **Weight:** 600
- **Line height:** 1.4
- **Letter spacing:** 0em
- **Role:** Form labels and strong inline labels

## Layout

The layout model is a comfortable, centered application shell with strong token discipline. Page sections should breathe with 80px vertical rhythm, cards should use the shared 24px padding logic, and data-heavy surfaces should stay restrained rather than visually noisy. Menus, tables, alerts, and forms are the recurring building blocks; they should all look like parts of the same system even when rendered in different contexts.

## Tokens - Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| none | 0px | `spacing.none` |
| xxs | 4px | `spacing.xxs` |
| xs | 8px | `spacing.xs` |
| sm | 12px | `spacing.sm` |
| md | 16px | `spacing.md` |
| lg | 24px | `spacing.lg` |
| xl | 32px | `spacing.xl` |
| 2xl | 40px | `spacing.2xl` |
| 3xl | 48px | `spacing.3xl` |
| 4xl | 64px | `spacing.4xl` |

### Border Radius

| Element | Value |
|---------|-------|
| none | 0px |
| xs | 2px |
| sm | 4px |
| md | 6px |
| lg | 8px |
| xl | 12px |
| pill | 9999px |
| circle | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `0 1px 4px rgba(0, 0, 0, 0.12)` | `shadows.sm` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 20px
- **Element gap:** 8px

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#F0F2F5` | Default page background |
| 1 | Surface | `#FFFFFF` | Card, modal, and control surface |
| 2 | Surface Secondary | `#F5F5F5` | Disabled fields and subdued panels |
| 3 | Table Header | `#EBECFA` | Table header wash |

## Elevation

- **Subtle Card Shadow:** `0 1px 4px rgba(0, 0, 0, 0.12)`
- **Overlay Treatment:** `rgba(0, 0, 0, 0.45)` over page content

## Imagery

Imagery is product-first, not decorative. Prefer screenshots, UI fragments, and data surfaces over abstract art or unrelated illustration. When live-site elements feel custom or off-system, the deviation should be reported instead of normalized.

## Components

### Primary Button
**Role:** Primary action, save, submit, or confirm

Background `#3f4373`
Text `#ffffff`
Border Radius `8px`
Padding `12px 16px`
Height `40px`
Typography body-md
Hover states resolve to the secondary brand tone
Active states uses the darker primary-active token

This is the dominant call-to-action surface and should be used consistently.

### Secondary Button
**Role:** Secondary action paired with the primary button

Background `#ffffff`
Text `#3f4373`
Border Radius `8px`
Padding `12px 16px`
Height `40px`
Typography body-md
It should visually pair with the primary button without introducing new fills or borders.

### Disabled Button
**Role:** Disabled action state

Background `#f5f5f5`
Text `rgba(51, 51, 51, 0.3)`
Matching radius and size as other buttons.
Disabled styles should never use ad hoc opacity or custom gray.

### Inputs and Selects
**Role:** Form entry controls

Background `#ffffff`
Text `#000000`
Placeholder `#616161`
Border Radius `2px`
Height `40px`
Typography body-md
Disabled fills use `#f5f5f5`
Input and select fields should stay visually aligned and should not drift into custom padding or border treatments.

### Input Placeholder States
**Role:** Empty and disabled field text

Placeholder text `#616161`
Disabled placeholder text `rgba(51, 51, 51, 0.2)` 
The goal is to preserve legibility without overusing opacity hacks or bespoke grays.

### Textarea
**Role:** Multi-line form entry

Background `#ffffff`
Text `#000000`
Border-radius 2px
Padded with the spacing scale
This control should feel like a larger sibling of the input.

### Checkbox and Radio
**Role:** Binary and exclusive selection controls

Both controls resolve to `#3f4373` for their active tone and keep body-md label typography
No alternate brand colors or one-off checkbox fills should appear outside the tokens.

### Switch
**Role:** Boolean toggle

Switches sit on the light border token and use the primary color for the active state
They should not introduce extra chromatic states.

### Modal and Drawer
**Role:** Elevated overlays for focused tasks

Both surfaces use `#ffffff`
Body-md typography
Border-radius 6px
Padding `24px`
Overlay color `rgba(0, 0, 0, 0.45)`
Elevation is subtle and should follow the single shadow token.

### Card
**Role:** Base content container

Cards use white surfaces
Typography body-md
Border Radius `2px`
Padding `24px`
Standard subtle shadow
They should feel quiet, structured, and reusable.

### Table
**Role:** Data presentation

Tables use white surfaces
Text `#000000` 
Body-md typography
`#EBECFA` header fill
`#F5F5F5` striped rows
White sorted cells
The table should read as a
clean information surface rather than a heavily styled widget.

### Menu
**Role:** Navigation and grouped options

Light menus use white surfaces with primary text
Dark menus use primary surfaces with white text
Selected states resolve to the primary color, and danger states use the error family
Menu spacing and selection patterns should match the token map exactly.

### Tabs
**Role:** Section switching and inline navigation

Tabs use white surfaces
Body-md typography
Primary ink bars
Their visual weight should stay restrained and consistent with the rest of the system.

### Tag and Badge
**Role:** Compact status, label, and count surfaces

Tags use the secondary surface and `#333333` text
Badges use the error color family with pill geometry
These should remain small, consistent, and tokenized.

### Alert
**Role:** Status messaging

Alerts resolve to the success, warning, error, and info families with matching light backgrounds and stronger icon or border colors.
No custom alert palette should be introduced outside the tokens.

### Tooltip and Popover
**Role:** Supplemental context surfaces

Tooltips use the primary color for their spotlight background and white text.
Popovers use the standard white surface and body-sm typography.

### Pagination and Breadcrumb
**Role:** Navigation affordances

Pagination uses white surfaces with primary selected states.
Breadcrumbs use body-sm typography and the secondary text color.

### Date Picker and Dropdown
**Role:** Selection and overlay controls

Selection states use the option-selected and option-active tints from the color tokens.
Dropdown surfaces remain white with standard body typography.

### Divider and Result Title
**Role:** Structural separation and prominent empty states 

Dividers use the light border token and secondary text.
Result titles use the H3 type style so empty states stay visually consistent with page headings.

### Steps
**Role:** Multi-step progress

Wait states use border-light
process states use primary
The entire step system should stay aligned with the component token map rather than ad hoc CSS.

## Do's and Don'ts

### Do
- Use the token map for every visual decision.
- Treat Ant Design component overrides as violations unless they are encoded in the component token mappings.
- Use the approved spacing and radius scales instead of arbitrary values.
- Keep table headers, alert states, and menu selections aligned with the declared tokens.
- Report deviations when the live site introduces one-off styling not present in the file.

### Don't
- Don't add new hardcoded colors, shadows, spacing values, or radii.
- Don't use inline styles or `!important` for cosmetic fixes.
- Don't drift into duplicate or near-duplicate colors when a token already exists.
- Don't let controls or content surfaces visually diverge from their tokenized siblings.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-primary: #3f4373;
  --color-secondary: #5e66a8;
  --color-accent: #ed693a;
  --color-success: #10a64a;
  --color-warning: #ffcc33;
  --color-error: #cc1f36;
  --color-info: #61c8d7;
  --color-background: #f0f2f5;
  --color-surface: #ffffff;
  --color-surface-secondary: #f5f5f5;
  --color-border: #d5d0da;
  --color-border-light: #f0f0f0;
  --color-text: #000000;
  --color-text-secondary: #333333;
  --font-body: 'Libre Franklin', sans-serif;
  --font-heading: 'Poppins', sans-serif;
  --radius-xs: 2px;
  --radius-lg: 8px;
  --radius-pill: 9999px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --shadow-subtle: 0 1px 4px rgba(0, 0, 0, 0.12);
}
```

### Ant Design Theme Mapping

```ts
const theme = {
  token: {
    colorPrimary: '#3f4373',
    colorSuccess: '#10a64a',
    colorWarning: '#ffcc33',
    colorError: '#cc1f36',
    colorInfo: '#61c8d7',
    colorBgLayout: '#f0f2f5',
    colorBgContainer: '#ffffff',
    colorText: '#000000',
    colorTextSecondary: '#333333',
    colorBorder: '#d5d0da',
    fontFamily: 'Libre Franklin, sans-serif',
    fontSize: 14,
    borderRadius: 2,
  },
  components: {
    Button: {
      colorPrimary: '#3f4373',
      colorPrimaryHover: '#5e66a8',
      colorPrimaryActive: '#20223a',
      colorErrorBg: '#cc1f36',
      colorTextDisabled: '#333333',
      borderRadius: 8,
    },
  },
};
```

## Audit Guide

When reviewing the live application, report any styling that falls outside the tokens and mappings defined in this file. Prioritize hardcoded colors, hardcoded spacing, custom radii, custom shadows, inline styles, `!important`, and Ant Design overrides that bypass the approved token set. Differences between similar menus, tables, buttons, alerts, or step indicators should also be flagged when they are not explained by the token map.

## Example Findings

| Severity | Location | Expected Value | Actual Value | Suggested Fix | Reason |
|----------|----------|----------------|--------------|---------------|--------|
| Critical | Button primary hover | `colors.secondary` | Hardcoded `#5f65a7` in local CSS | Replace with token reference | Keeps hover behavior tokenized and auditable |
| Warning | Table header | `colors.table-header` | `#f8efe3` inline | Move to token or existing alias | Prevents one-off table styling drift |
| Suggestion | Card shadow | `shadows.sm` | A second shadow recipe | Consolidate to existing shadow token | Simplifies depth language |
