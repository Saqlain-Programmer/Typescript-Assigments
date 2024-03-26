let Guset_List :string[] = ['Saqlain Bhatti','Noor','Nehal'];
for(let i=0; i<Guset_List.length; i++){
    console.log('Dear Mr. ' + Guset_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

let absent_Guest :string = 'Saqlain Bhatti' ;
let new_Guest :string = 'Kabeer Aslam' ;
Guset_List[0] = new_Guest ;
for(let i=0; i<Guset_List.length; i++){
    console.log('Dear Mr. ' + Guset_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`)