export class FaceSnap {  // ici je creer juste un type personniliser avec les attributs d'une faceSnap
    // title!: string                  constructor(
    // constructor() {        <====>            public title: string
    //     this.title = title;                  ) {}
    // }            //Grace a typestrict en ajoutant "public"

    constructor(
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
}