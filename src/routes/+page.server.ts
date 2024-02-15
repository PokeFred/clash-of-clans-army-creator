import type { PageServerLoad } from './$types'
import db from "$server/db"

export const load: PageServerLoad = async (): Promise<{}> => {
    const result = await db.prepare(`
        SELECT pet_identifier, townhall_level, MAX(pet_level) AS highest_pet_level
        FROM pet_level
        GROUP BY pet_identifier, townhall_level;
    `).all()
    console.log(result)

    return {}
}
