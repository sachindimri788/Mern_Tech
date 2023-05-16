for(let i=1;i<=6;i++)
{
    let p='';
    for(let j=i;j<=6;j++)
    {
        if(i==1 || j==i || j==6){
            p+='*';
        }
        else{
            p+=' ';
        }
    }
    console.log(p);
    
}