import Database from 'better-sqlite3'

const db: Database.Database = new Database(':memory:')

db.prepare(`
CREATE TABLE hero (
    hero_identifier char(255),
    hero_name char(255)
)
`).run()

db.prepare(`
CREATE TABLE hero_level (
    hero_identifier char(255),
    hero_level int,
    townhall_level char(255)
)
`).run()

db.prepare(`
CREATE TABLE pet (
    pet_identifier char(255),
    pet_name char(255)
)
`).run()

db.prepare(`
CREATE TABLE pet_level (
    pet_identifier char(255),
    pet_level int,
    townhall_level char(255)
)
`).run()

function addPet(name: string, identifier: string): void {
    const smt: Database.Statement = db.prepare(`INSERT INTO pet (pet_identifier, pet_name) VALUES ($pet_identifier, $pet_name)`)

    smt.run({
        pet_identifier: identifier,
        pet_name: name
    })
}

function addPetLevel(level: number, townhall: number, Identifier: string): void {
    const smt: Database.Statement = db.prepare(`INSERT INTO pet_level (pet_identifier, pet_level, townhall_level) VALUES ($pet_identifier, $pet_level, $townhall_level)`)

    smt.run({
        pet_identifier: Identifier,
        pet_level: level,
        townhall_level: townhall
    })
}

addPet("L.A.S.S.I", "l_a_s_s_i")
addPetLevel(1, 14, "l_a_s_s_i")
addPetLevel(2, 14, "l_a_s_s_i")
addPetLevel(3, 14, "l_a_s_s_i")
addPetLevel(4, 14, "l_a_s_s_i")
addPetLevel(5, 14, "l_a_s_s_i")
addPetLevel(6, 14, "l_a_s_s_i")
addPetLevel(7, 14, "l_a_s_s_i")
addPetLevel(8, 14, "l_a_s_s_i")
addPetLevel(9, 14, "l_a_s_s_i")
addPetLevel(10, 14, "l_a_s_s_i")
addPetLevel(11, 15, "l_a_s_s_i")
addPetLevel(12, 15, "l_a_s_s_i")
addPetLevel(13, 15, "l_a_s_s_i")
addPetLevel(14, 15, "l_a_s_s_i")
addPetLevel(15, 15, "l_a_s_s_i")

addPet("Electro Owl", "electro_owl")
addPetLevel(1, 14, "electro_owl")
addPetLevel(2, 14, "electro_owl")
addPetLevel(3, 14, "electro_owl")
addPetLevel(4, 14, "electro_owl")
addPetLevel(5, 14, "electro_owl")
addPetLevel(6, 14, "electro_owl")
addPetLevel(7, 14, "electro_owl")
addPetLevel(8, 14, "electro_owl")
addPetLevel(9, 14, "electro_owl")
addPetLevel(10, 14, "electro_owl")

addPet("Mighty Yak", "mighty_yak")
addPetLevel(1, 14, "mighty_yak")
addPetLevel(2, 14, "mighty_yak")
addPetLevel(3, 14, "mighty_yak")
addPetLevel(4, 14, "mighty_yak")
addPetLevel(5, 14, "mighty_yak")
addPetLevel(6, 14, "mighty_yak")
addPetLevel(7, 14, "mighty_yak")
addPetLevel(8, 14, "mighty_yak")
addPetLevel(9, 14, "mighty_yak")
addPetLevel(10, 14, "mighty_yak")
addPetLevel(11, 15, "mighty_yak")
addPetLevel(12, 15, "mighty_yak")
addPetLevel(13, 15, "mighty_yak")
addPetLevel(14, 15, "mighty_yak")
addPetLevel(15, 15, "mighty_yak")

addPet("Unicorn", "unicorn")
addPetLevel(1, 14, "unicorn")
addPetLevel(2, 14, "unicorn")
addPetLevel(3, 14, "unicorn")
addPetLevel(4, 14, "unicorn")
addPetLevel(5, 14, "unicorn")
addPetLevel(6, 14, "unicorn")
addPetLevel(7, 14, "unicorn")
addPetLevel(8, 14, "unicorn")
addPetLevel(9, 14, "unicorn")
addPetLevel(10, 14, "unicorn")

/*
Barracks -> Troops
Dark Barracks -> Troops
Spell Factory -> Spells
Dark Spell Factory -> Spells
Workshop -> Siege Machines
Laboratory -> Troops Level, Spells Level, Siege Machines Level
Pet House -> Pets, Pet Level
Blacksmith -> Hero Equipment
*/

/*
Army Camp
Level | Capacity | Townhall
1 | 20 | 1
2 | 30 | 2
3 | 35 | 3
4 | 40 | 4
5 | 45 | 5
6 | 50 | 6
7 | 55 | 9
8 | 60 | 10
9 | 65 | 11
10 | 70 | 12
11 | 75 | 13
12 | 80 | 15

Amount | Townhall
1 | 1
3 | 2
5 | 3
7 | 4

Barracks
Level | Troop | Townhall
1 | Barbarian | 1
2 | Archer | 1
3 | Giant | 1
4 | Goblin | 2
5 | Wall Breaker | 3
6 | Balloon | 4
7 | Wizard | 5
8 | Healer | 6
9 | Dragon | 7
10 | P.E.K.K.A | 8
11 | Baby Dragon | 9
12 | Miner | 10
13 | Electro Dragon | 11
14 | Yeti | 12
15 | Dragon Rider | 13
16 | Electro Titan | 14
17 | Root Rider | 15

Amount | Townhall
1 | 1

Dark Barracks
Level | Troop | Townhall
1 | Minion | 7
2 | Hog Rider | 7
3 | Valkyrie | 8
4 | Golem | 8
5 | Witch | 9
6 | Lava Hound | 9
7 | Bowler | 10
8 | Ice Golem | 11
9 | Headhunter | 12
10 | Apprentice Warden | 13

Amount | Townhall
1 | 7
*/

db.prepare(`
CREATE VIEW test_view AS
SELECT * FROM pet
`).run()

export default db
