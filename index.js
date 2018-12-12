// add solution here
function theBeatlesPlay(musicians, instruments){
  let array =[ ];
  for (let i=0; i < musicians.length; i++){
    const string = musicians[i]+" plays "+ instruments[i];
    array.push(string);
  }
  return array;
}