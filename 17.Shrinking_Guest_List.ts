let Guset_List :string[] = ['Saqlain Bhatti','Noor','Nehal'];
// for(let i=0; i<Guset_List.length; i++){
//     console.log('Dear Mr. ' + Guset_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

let absent_Guest :string = 'Saqlain Bhatti' ;
let new_Guest :string = 'Kabeer Aslam' ;
Guset_List[0] = new_Guest ;
// for(let i=0; i<Guset_List.length; i++){
//     console.log('Dear Mr. ' + Guset_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good News! We find Big Table So we are inviting 3 more guests.')

Guset_List.unshift('Saqlain Bhatti');
Guset_List.splice(2 , 0 , 'Elvish Yadav');
Guset_List.push('Mukesh Ambani');
for(let i=0; i<Guset_List.length; i++){
    console.log('Dear Mr. ' + Guset_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');
while(Guset_List.length > 2){
   let remove_Guest = Guset_List.pop();
   console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
} 
for(let i=0; i<Guset_List.length; i++){
    console.log('Dear Mr. ' + Guset_List[i] + ',\n\You are still invited.\n\nThank You!\n\n')
}
Guset_List.splice(0,2);
console.log(Guset_List);