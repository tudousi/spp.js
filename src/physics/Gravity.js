SPP.Gravity=function()
{
	SPP.Force.call(this);
};
SPP.inherit(SPP.Gravity,SPP.Force);
SPP.Gravity.prototype.init=function(value)
{
	SPP.Force.prototype.init.call(this,0,value,Infinity);
};