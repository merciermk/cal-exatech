/* export const colorEvent = [
  { title: "Anglais", color: "red" },
  { title: "Informatique", color: "blue" },
  { title: "Allemand", color: "pink" },
  { title: "Mathématique2", color: "pink" },
];

export function getCalColor(colorEvent: any[], data: any[]) {
  colorEvent.forEach((eachColor) => {
    data.forEach((event) => {
      if (event.title === eachColor.title) {
        event.color = eachColor.color;
      }
    });
  });
} */

export const colorEvent = {
  ['Anglais']: "green",
  Allemand: "red",
  Informatique: 'purple',
  ['Mathématique2']: 'black'
}

/**  Prend colorEvent et un tableau d'event , compare chaque Event et retourne un tableau d'event avec les couleurs à afficher  */
export function getCalColor(colorEvent: any, events: { forEach: (arg0: (event: any) => void) => void; color: any; }) {
  const data = events
  for (const matiere in colorEvent){

    data.forEach((event: { title: string; color: any; }) => {
      if(event.title === matiere.toString()){
        
        event.color = colorEvent[matiere]

      }
    });
  }
  return data
}
