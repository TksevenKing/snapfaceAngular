//Ceci permet de creer un type de donnee personnaliser qu'on va passer a notre component pour eviter de mettre beaucoup d'attibuts
export class FaceSnap {  // ici je creer juste un type personniliser avec les attributs d'une faceSnap qui peut m avoir des comportements
    // title!: string                  constructor(
    // constructor() {        <====>            public title: string
    //     this.title = title;                  ) {}
    // }            //Grace a typestrict en ajoutant "public"

    location?: string; // ? pour dire que c'est optionnel (on utlise ceci pour dire qu'il peut etre undefined dans certains cas)
    
    constructor(       // par ce que souvent on peut ne pas affchier certaines chose dans la page
        public imageUrl: string,
        public title: string,
        public description: string,
        public createdAt: Date,
        public likes: number
    ) {}

    addLikes(){
        this.likes++
    }
    removeLikes(){
        this.likes--
    }

    setLocation(location: string): void {
        this.location = location
    }
}