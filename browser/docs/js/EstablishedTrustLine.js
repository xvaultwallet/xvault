class  EstablishedTrustLine
{
	/*
	EstablishedTrustLine represents a trustline setup on an XRP account
	*/
  constructor(address, assetname,balance) 
  {
    this.address = address;
    this.balance = balance;
	this.assetname = assetname;
  }
}