for (b=1;b<100;b++){
for (j=1;j<100;j++){
for (i=1;i<100;i++){
i*j===b && a.push(b)
}}}
for(i=0;i<a.length;i++){
z=a.filter(j=>j==i)
z.length==2&&print(i)  
}