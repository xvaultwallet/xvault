class  EndorsedTrustLine
{
	/*
	EndorsedTrustLine represents the details needed to establish a trustline
	for tokens endorsed by xVault. It allows easy setup of a TL by the user
	by providing the details they need to enter to set it up
	*/
  constructor(issueaddress, assetname,maxbalance,desc) 
  {
    this.issueraddress = issueaddress;
    this.maxbalance = maxbalance;
	this.assetname = assetname;
	this.description = desc;
  }
}