xVault is a wallet for the XRP network licensed under the GNU Public License 2.0 as free open source software.
It is derived from Toast Wallet, an earlier open source XRP wallet. The developers are not affilliated with Toast or Ripple.
xVault is provided without any warranty and used at your own risk.

For more information see www.xvault.dev

Building xVault form source requires Electron Builder.

Building a .deb Debian package on Linux
=======================================
apt-get install yarnpkg
yarnpkg add electron-builder --dev (note currently this fails on all versions of Debian due to package dependency version mismatch, see alternative below)
cd <projdir>/browser
yarnpkg electron-builder --linux

The .deb is then found in <projdir>/browser/dist



Alternative Linux build option
------------------------------
if you already installed the yarnpkg .deb you will need to remove it with dpkg --purge yarnpkg then apt-get autoremove
Download the Linux pre-compiled binary from nodejs.org
extract it with tar -xf ./node-xyz-tar.xz
Binaries are now in <extrateddir>/bin
ln -s <extracteddir>/bin/npm /usr/bin/npm
ln -s <extracteddir>/bin/node /usr/bin/node
cd <projdir>/browser
npm install -g yarn
yarnpkg add electron-builder --dev
npm install electron@15.0.0    (note the use of the --unsafe-perm option may be needed if running as root)
yarnpkg electron-builder --linux


Building a Windows app on Linux
===============================
cd <projdir>/browser
yarnpkg electron-builder --win

The exe is then in <projdir>/browser/dist/win-unpacked

To build on Windows
===================
Install node.js by dwonloading from nodejs.org
From command line run:
npm install -g yarn
cd <projdir>/browser
yarnpkg add electron-builder --dev
npm install electron@15.0.0 
yarnpkg electron-builder --win (To build Win exe)
yarnpkg electron-builder (To build .deb)

Note that it is not currently possible to build a Linux .deb on Windows directly without the use of a third party Electron build server

To build on Mac
===============
Install node.js by downloading from nodejs.org
From command line run:
sudo npm install -g yarn
cd <projdir>/browser
sudo yarnpkg add electron-builder --dev --universal
sudo npm install electron@15.0.0  (this installs electron v15 a version > 11 is needed for arm Macs)
yarnpkg electron-builder --mac
The exe is then in <projdir>/browser/dist/mac
Note that due to a bug with electron if you intend to install on the local machine you must follow these steps otherwise install will fail:
1. Copy installer pkg to alternative location such as Downloads folder
2. Delete contents of <projdir>/browser/dist/
3. Then run installer

Important Notes
===============
To view contents of an ASAR archive file use:
npx asar extract /path/to/asar /path/to/extract/to (Windows)

NOTE: There is a portable exe (runs standalone) in /<projdir>/browser/dist/xVault<ver>
This should not be used as it will store the walletdata folder (secret keys) under the folder
containing the app. It is thus not suitable for a multiuser PC installation.

For a multiuser PC installation use the binaries in <projdir>/browser/dist/win-unpacked (Windows) or the installer at <projdir>/browser/dist/xVault Setup<ver>.exe which will install it to C:\Program Files\xVault
and <projdir>/browser/dist/linux-unpacked or <projdir>/browser/dist/xVault.deb (Linux)
These 4 options will store the walletdata (secret keys) in the following location:
%HOME%/AppData/Roaming/xVault (Windows)
$HOME/.config/xVault (Linux)
/Users/<username>/Library/Application Support/xVault (Mac)


To enable the Chrome debugging console uncomment the line mainWindow.webContents.openDevTools() in electron-start.js


Calculating SHA256 hash of binary
=================================
shasum -a 256 /path/to/.deb produces a SHA256 hash on Linux. 
shasum -a 256 /path/to/.pkg produces a SHA256 hash on Mac 
Get-FileHash \path\to\.exe -Algorithm SHA256   produces a SHA256 hash on Windows PowerShell


Pre  release version history
===================================
3.0.1 forked from Toast 3.0.0 with UI tidy up and build script change
3.0.2 added token (trustline) balances on Account Details tab
3.0.3 added transaction history for all coins rather than just XRP, added pre-fil UI for adding trustlines for 'Endorsed' coins such as CSC, gets trustline reserve from network rather than hardcoded
3.0.4 changed backup tab to output all secret keys rather than JSON
3.0.5 prevents you adding the same trustline twice
3.0.6 added date to transaction history, checks if receiver has trustline for token setup before sending, fixed bug where UI didnt lock after timeout on Mac & Linux