class SemestreService {
    getAll(){
        const semestres = localStorage.getItem('semestres')
        return semestres ? JSON.parse(semestres) : []
    }

    get(id){

        const semestres = this.getAll()
        return semestres[id]

    }

    create(dados){
        const semestres = this.getAll()
        semestres.push(dados)
        localStorage.setItem('semestres', JSON.stringify(semestres))
    }

    update(id, dados){

        const semestres = this.getAll()
        semestres.splice(id, 1, dados)
        localStorage.setItem('semestres', JSON.stringify(semestres))

    }

    delete(id){

        const semestres = this.getAll()
        semestres.splice(id, 1)
        localStorage.setItem('semestres', JSON.stringify(semestres))

    }
}

export default new SemestreService()