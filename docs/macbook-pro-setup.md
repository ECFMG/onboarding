---
id: macbook-pro-setup
title: Macbook Pro Setup
---

## Prior to Start Date

- Accounts (complete before your start date)
  - Ensure you have completed [Create Accounts](./create-accounts)
- Install **Okta Verify** and **Microsoft Teams** on your mobile phone  
  - Okta URL: https://ecfmg.okta.com


# Prerequisites (On Start Date)

> ⚠️ WARNING: DO NOT PERFORM STEPS OUT OF ORDER  
> WE PERFORM THESE STEPS AS A TEAM. DO NOT DO THEM INDEPENDENTLY

> Wait to perform any of the steps until on a teams call with the connected apps team (message them first)

- Message **Seven Thomas** (or Patrick Gidich if unavailable) on Teams when ready


## General Notes

- **Patience**
  - Some parts will be boring or frustrating, but consistency across the team matters
- You will receive your username and temporary password on your start date

> 💡 If you have issues, contact Seven Thomas or Patrick Gidich first  

 - 📞 484-431-4487 (Patrick)

 - 📞 980-259-3376 (Seven)

> They may direct you to the Intealth Help Desk:  
> 📞 215-823-2163  
> 📧 servicedesk@intealth.org


## Register Password Reset

Register your ability to reset your password here (from your personal laptop) 
- Register the password reset verification method for a work or school account - Microsoft Support
  - [Register to Reset Password](https://support.microsoft.com/en-us/account-billing/register-the-password-reset-verification-method-for-a-work-or-school-account-47a55d4a-05b0-4f67-9a63-f39a43dbe20a) (Use your personal device to follow this link, or incognito/private browsing mode in your browser for this to work)
  - Suggestion - add Phone as secondary login method
  - Note: Your username is your full email address jdoe@intealth.org
  - Username = full email (e.g., jdoe@intealth.org)

- Later if needed - you will be able to reset your password here:
  - https://passwordreset.microsoftonline.com/


## Password Requirements

- Password must be changed every 6 months
- PASSWORDS CANNOT BE CHANGED MULTIPLE TIMES IN ONE DAY
- Passwords must be at least 12 characters long
- Passwords should contain letters and numbers
- Cannot:
  - contain `*`
  - start with a number
- New password must be unique in characters and words from previously used password(s)
  - *Not Acceptable*: Old: Password123, New: Password12345
  - *Acceptable*: Old: OrionStar, New: LemonTrain
- No character sequences or repetitions
  - *Not Acceptable*: Password12345 or PasswordAAAA
  - *Acceptable*: $n0wC@ctu$
- Limitations will be placed on certain key words that contextually relate to you
- Passwords cannot contain context specific words, relating to the Enterprise or you personally
  - *Not Acceptable*: ECFMGstarEmployee, FredWilmaPebbles979902, 123MainSt, SpotTheDog, and PhillyPhanatic13
  - *Acceptable*: CabinFishFood
- Common words or passwords may not be used as passwords
  - Not Acceptable: variations of the word password (p@ssword, password123)
- Known compromised passwords will not be permitted.
  - Any passwords found in known data breaches may not be used.

  
  &nbsp;&nbsp;&nbsp;&nbsp;
# 1 - Start Up and Sign In

1. Plug-in to power supply
2. Start-up New Macbook Pro:
   - **Language**: Choose **English**
   - **Region**: Choose **United States**
   - **Transfer Your Data to This Mac**: Choose **Setup as new**
   - **Accessibility**: Choose **Not Now**
   - **WiFi**: `<Set to your wifi>`
   - **Data & Privacy**: `<continue>`

3. **Create computer account**:
   - Full Name: first + last name
   - Account Name: first name (this will be your username)
   - Password: `<generate from 1password>`

4. **Sign in with Apple ID** `<use personal apple id>`
   - Verification Code
   - Terms & Conditions: `<accept>`

5. **You may be presented with the following options**:

   i. iCloud Keychain - choose setup later

   ii. Make this your new Mac (if presented with this option)

   &nbsp;&nbsp;&nbsp;&nbsp;1. Click Continue

   &nbsp;&nbsp;&nbsp;&nbsp;2. FileVault Disk Encryption:

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. Turn on FileVault Disk Encryption: `<keep checked>`

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Allow my iCloud account to unlock my disk: `<keep checked>`

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. Click Continue

   &nbsp;&nbsp;&nbsp;&nbsp;3. Touch ID: `<perform this now>`

   &nbsp;&nbsp;&nbsp;&nbsp;4. Apple Pay: `<continue without setting up>`

   iii. Choose your look / Light Dark theme - `<whatever you want>`


#### 1-B - Install Software Updates

1. Command+Space -> type & select "System Settings", General -> Software Update

   a. Update now

#### 1-C If you happened to have skipped sign-in with your Apple ID earlier - add it now

1. Command+Space -> type & select "System Settings" - Choose Sign in with Apple ID
  
  &nbsp;&nbsp;&nbsp;&nbsp;(you created this earlier or using your existing personal AppleID)

  &nbsp;&nbsp;&nbsp;&nbsp;

# 2 - Partition Drive & Base Folder Structure:

1. Launch Disk Utility

   a. (Command+Space => type & select "Disk Utility")

2. Add new volume (this is where your code will go) Click plus in header

   a. Name: **files**

   b. Format: **APFS**

   c. Create Base Folder Structure

   &nbsp;&nbsp;&nbsp;&nbsp;i. Launch Finder (Command+Space => type & select "Finder")

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Command+Shift+G type `/Volumes/files` press return

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Command+Shift+N to create folders, add

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. **applications** *(where you'd install MuleSoft)*

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. **cloud-files** *(where you'll mount OneDrive)*

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. **src** *(where your code goes)*

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i. *Drag src to Favorites in sidebar*

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d. **vm-images** *(where your Parallels VMs would go)*

   d. In the top menu -> Finder -> Settings -> Sidebar

   &nbsp;&nbsp;&nbsp;&nbsp;i. *Under Locations, ensure Hard Disks is checked*

   &nbsp;&nbsp;&nbsp;&nbsp;
# 3 - Install Chrome / Office / OneDrive / Git

1. Launch Safari

> &nbsp;&nbsp;&nbsp;&nbsp; a. Navigate to: https://www.google.com/chrome/

> &nbsp;&nbsp;&nbsp;&nbsp; b. Install Chrome 

(Safari is a good browser on a Mac, but the Chrome Dev tools is great
Bing too   if you feel like trying it out)


2. Install Your Password Manager (if using 1Password, ensure you have you master key)
> &nbsp;&nbsp;&nbsp;&nbsp; a. Desktop: https://1password.com/downloads/mac/

> &nbsp;&nbsp;&nbsp;&nbsp; b. Browser: https://1password.com/downloads/browser-extension

3. Install Microsoft Office Suite (sign in with Intealth/ECFMG Credentials)
> &nbsp;&nbsp;&nbsp;&nbsp; a. https://portal.office.com/account

> &nbsp;&nbsp;&nbsp;&nbsp; b. When prompted choose to install for all users

> &nbsp;&nbsp;&nbsp;&nbsp; c. When prompted to mount OneDrive - mount to `/volumes/files/cloud-files`

> &nbsp;&nbsp;&nbsp;&nbsp; d. Configure Outlook ensure Outlook Settings do use focused inbox: 

(uncheck the items noted below) (command-comma brings up settings window)

![Outlook Focused Inbox Settings](/img/outlook-focused-inbox.png)

> &nbsp;&nbsp;&nbsp;&nbsp; e. You may also want to configure the "compact" density preference under "general" in Outlook settings

> &nbsp;&nbsp;&nbsp;&nbsp; f. Configure Outlook’s working hours to match your normal 7hr+1h lunch schedule 

![Calender Work Schedule](/img/calender-work-schedule.png)

4. Install Microsoft Teams (skip if installed with Microsoft Office)

> &nbsp;&nbsp;&nbsp;&nbsp; a. https://www.microsoft.com/en-us/microsoft-teams/download-app (now apple optimized)
>
> &nbsp;&nbsp;&nbsp;&nbsp; b. <u>ONLY</u> if install goes sideways
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. From command prompt
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. `sudo pkgutil --forget com.microsoft.teams`
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. rm -r ~/Library/Application\ Support/Microsoft/Teams
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. install daily build of teams:
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a. raw.githubusercontent.com/ltzLevvie/MicrosoftTeams-msinternal/master/defconfig
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. reinstall teams

5. Message the Team using the group chat called “CXA Team” and let the team know your GitHub Account handle.


&nbsp;
# 4 - Install Git / Node / Runtime / Java
#### 1. Install Apple Developer Command Line Tools (this will install GIT)

> &nbsp;&nbsp;&nbsp;&nbsp; a. Launch Terminal (command+space type Terminal), run following command (this takes a long time)

```bash
xcode-select --install
```

> &nbsp;&nbsp;&nbsp;&nbsp; b. When prompted install command line tools

> &nbsp;&nbsp;&nbsp;&nbsp; c. In terminal try checking for an update

```bash
softwareupdate --list
softwareupdate --install --all
```

> &nbsp;&nbsp;&nbsp;&nbsp; d. Open System Settings, search for Software Update and check to see if the command line tools need to be updated

&nbsp;
#### 2. Add GitHub SSH Keys

> &nbsp;&nbsp;&nbsp;&nbsp; a. Follow the instructions below <u><i>very carefully</i></u> (note your MacOS version is greater than 10.12)
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. you should add a passphrase when generating the key
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iii. <u><b>Do not</b></u> follow the step for Generating a new SSH key for a hardware security key
>
> &nbsp;&nbsp;&nbsp;&nbsp; b. (skip this step unless directed otherwise) To support both AzureDevOps and GitHub
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. Follow instructions for GitHub Above
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. Add another SSH key using the RSA method - add to keychain (don't use the .pub extension)
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iii. Edit the SSH Config using the hostname github.com for GitHub (if instructed also dev.azure.com for Azure DevOps (be sure to leave off the .pub extension))
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iv. Use the pb-copy command for the key (with the .pub extension) and put into azure credentials (azure doesn't support the newer more secure SSH approach that GitHub requires)

&nbsp;
#### 3. Associate your @intealth.org email account to your GitHub Profile and validate your email

> &nbsp;&nbsp;&nbsp;&nbsp; a. https://github.com/settings/emails
>
> &nbsp;&nbsp;&nbsp;&nbsp; b. (note you can add your corporate email to your personal GitHub account - it's a blended account)

&nbsp;
#### 4. Add your Git name/email (from Terminal)

> &nbsp;&nbsp;&nbsp;&nbsp; a. Launch Terminal - run the following commands (replace highlighted sections with your name/email) - this email should be configured in your GitHub verified emails (it can be either your personal or @intealth.org email)

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

&nbsp;
#### 5. Install MISE

> &nbsp;&nbsp;&nbsp;&nbsp; a. Install Homebrew (link)
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. Will require machine password

> ⚠️ **IMPORTANT:** Be sure to follow instructions at end of installing which prompts you to **copy and paste 3 commands into the terminal and run them**

> &nbsp;&nbsp;&nbsp;&nbsp; b. Install MISE
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. Launch new Terminal window - run following commands:

```bash
brew update && brew install mise
```

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. Activate MISE in your shell

```bash
touch ~/.zshrc
echo 'eval "$(mise activate zsh)"' >> ~/.zshrc
source ~/.zshrc
```

> ⚠️ **TROUBLESHOOTING:** If MISE says it does not have permission:

```bash
mise trust
```

&nbsp;

> ⚠️ 6. **SKIP THIS STEP** - **Keeping instructions only if MISE has issues**

Install NVM

> &nbsp;&nbsp;&nbsp;&nbsp; a. Launch Terminal - run the following command

```bash
touch ~/.zshrc
```

> &nbsp;&nbsp;&nbsp;&nbsp; b. Run the install script copied from here:
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. https://github.com/nvm-sh/nvm#install--update-script
>
> &nbsp;&nbsp;&nbsp;&nbsp; c. **Quit and restart terminal** once completed
>
> &nbsp;&nbsp;&nbsp;&nbsp; d. Install the Node with the latest version supported by Azure Functions (currently v20.x)
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. More details on status of newer versions can be referenced [here](#).
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. Launch Terminal - run the following command

```bash
nvm install v22
```

&nbsp;
#### 7. Install the latest .NET Runtime - MacOS ARM-64

> • Select the version marked as **(latest) / Long Term Support** from here:
>
> &nbsp;&nbsp;&nbsp;&nbsp; https://dotnet.microsoft.com/en-us/download/dotnet/
>
> • Then find the section labeled **.NET Runtime**
>
> • Choose the **MacOS → ARM-64** version (**Installers**)
>
> • Download and run it, then reboot
>
> • Confirm Installation
>
> &nbsp;&nbsp;&nbsp;&nbsp; ○ Launch a new Terminal - run the following commands:

```bash
dotnet --list-runtimes
```

&nbsp;
#### 8. Install Java

> &nbsp;&nbsp;&nbsp;&nbsp; a. Visit Adoptium (the source for open source and free version of Java)
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; https://adoptium.net/temurin/releases/
>
> &nbsp;&nbsp;&nbsp;&nbsp; b. Scroll down page to Select:
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. **Operating System:** macOS
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. **Architecture:** aarch64
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iii. **Package Type:** JRE (java runtime environment, don't need software development kit)
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iv. **Version:** `<leave default>`
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; v. Download the **PKG** file (about 56mb download), and run it, then reboot
>
> &nbsp;&nbsp;&nbsp;&nbsp; c. Confirm Installation
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • Launch Terminal - run the following command:

```bash
java --version
```

# 5 - Install VSCode / Azure Tools

#### 1. Install Azure Functions Core Tools v4

> &nbsp;&nbsp;&nbsp;&nbsp; a. Launch new Terminal window - run following commands:

```bash
brew tap azure/functions
brew install azure-functions-core-tools@4
```

#### 2. Install VSCode (link)

> Choose **Apple Silicon (zip)** <u>not</u> **INTEL** and copy the file within the zip archive to **Applications**

#### 3. Install Azure CLI (link)

> &nbsp;&nbsp;&nbsp;&nbsp; a. Launch new Terminal window - run the following command:

```bash
brew update && brew install azure-cli
```

#### 4. Launch VS Code

# 6 - Install and configure extensions for VSCode
1. GitHub Copilot (can use pre-release version - should already be installed)

2. GitHub Copilot Chat (should already be installed)

3. GitHub Pull Requests

4. Azure Tools

5. SonarQube for IDE (trust publisher)

> &nbsp;&nbsp;&nbsp;&nbsp; a. Java Home

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Path to JRE (Java Runtime Environment)

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Paste the following URL to access the settings: `vscode://settings/sonarlint.ls.javaHome`

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Example of value you should use: (note you need to ensure version is correct in path)

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `/Library/Java/JavaVirtualMachines/temurin-25.jre/Contents/Home`


> &nbsp;&nbsp;&nbsp;&nbsp; b. Path to Node Executable

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Paste the following URL to access the settings:

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `vscode://settings/sonarlint.pathToNodeExecutable`

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Can get proper location by typing the following in a terminal prompt:

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `which node`


> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Example of value you should use: (note you need to ensure username and version is correct in path)

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `/Users/patrick/.nvm/versions/node/v22.21.1/bin/node`


> &nbsp;&nbsp;&nbsp;&nbsp; c. Add organization key to SonarQube Cloud settings for organization **ECFMG**

![SonarQube ECFMG Settings](/img/sonarqube-ecfmg-settings.png)

![ECFMG Key Selection](/img/ecfmg-key-selection.png)

&nbsp;

> &nbsp;&nbsp;&nbsp;&nbsp; d. Add organization key to SonarQube Clooud for organization **Simnova, LLC**

![SonarQube Simnova Settings](/img/sonarqube-simnova-settings.png)

![Simnova Key Selection](/img/simnova-key-selection.png)

&nbsp;

> &nbsp;&nbsp;&nbsp;&nbsp; e. Confirm Configuration:

![Confirm Configuration](/img/confirm-configuration.png)

6. [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)
7. [Azurite](https://marketplace.visualstudio.com/items?itemName=Azurite.azurite)
8. [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
9. [Vitest Explorer](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)
10. [Sourcery](https://marketplace.visualstudio.com/items?itemName=sourcery.sourcery)
11. [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

Right click on the vertical menubar and select “Move Primary Sidebar Right”

Right click on Sourcery on vertical menubar and select “Move to Secondary Sidebar” - login (choose login with GitHub)

# 7 - Maximize Screen Resolution
Go to settings → Displays → (Scroll down) → Click Advanced → Enable Show Resolutions as a list → Choose the highest resolution that your eyes can handle without excessive strain. (more code on the screen at once = higher productivity)

# 8 - optional - Install VPN 
<u>(optional - only if directed to do so)</u>

1. Ensure OneDrive is synced

2. Copy this file to your desktop and open it

> &nbsp;&nbsp;&nbsp;&nbsp; a. [Download AnyConnect VPN](https://ecfmg1.sharepoint.com/:f:/r/sites/ConnectedApps/Shared%20Documents/CXA-UX%20and%20Dev/administrative/vpn/cisco-secure-client-2026?csf=1&web=1&e=ecFMBS)

3. Launch the AnyConnect.pkg installer

4. Connect using IntealthOkta

> &nbsp;&nbsp;&nbsp;&nbsp; a. You'll only use this to either submit a timesheet or access the ticketing system, other than that please do not connect to the VPN, be sure to have no other applications using the network when you're on the VPN (e.g. Spotify) and disconnect as soon as you're done.
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. username: `<<your username>>@ecfmg.org`
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. password: `<<your password>>`
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; iii. choose Oktaverify push

5. DO NOT CHOOSE ANY OPTIONS OTHER THAN VPN

> &nbsp;&nbsp;&nbsp;&nbsp; a. If install goes sideways
>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i. `sudo pkgutil --forget com.cisco.pkg.anyconnect.vpn`

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ii. Should put into disk image - [see here for info](https://eshop.macsales.com/blog/63564-how-to-create-a-disk-image-dmg-for-storage-in-macos/)

# 9 - optional - Install VPN 
<u>(only required if brand new Macbook Pro is Provided by Intealth)</u>

&nbsp;

Click About This Mac

![About This Mac](/img/about-this-mac.png)

Click More Info

![More Info](/img/more-info.png)

Select the Name and update it using this pattern: HQ-MAC-`<serial number>`

![Mac Update Name](/img/macbook-update-name.png)

# 10 Enroll Mac With InTune

[Intune Documentation](https://ecfmg1-my.sharepoint.com/:w:/g/personal/rsiwinski_ecfmg_org/Eei9jOoPmzVJgHYKBIlcvWABbnDi65Z-Ga5ilr86el91Sg?e=KFXewI&wdExp=TEAMS-TREATMENT&web=1&TeamsCID=7a1f0ca5-a7c8-4c29-b173-b79e5ca46893&linkOpenTime=1782306383961)