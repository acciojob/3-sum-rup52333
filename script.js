function threeSum(arr, target) {
  //your code here
   arr.sort((a,b)=>a-b);
let ans=arr[0]+arr[1]+arr[2];
for(let i=0;i<arr.length;i++){
 let start=i+1;
let end=arr.length-1;
while(start<end){
	const sum=arr[i]+arr[start]+arr[end];
if(sum<target){
	start++;
}
else {
	end--;
}
if(Math.abs(sum-target)<Math.abs(ans-target)){
	ans=sum;
}
	
}

	
}

return ans;
	
}

module.exports = threeSum;
