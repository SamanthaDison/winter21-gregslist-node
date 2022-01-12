import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"

class JobsService {

    async getAll() {
        const foundJobs = await dbContext.Jobs.find()
        return foundJobs
    }

    async getById(jobId) {
        const foundJob = await dbContext.Jobs.findById(jobId)
        if (!foundJob) {
            throw new BadRequest('Unable to find by Id')
        }
        return foundJob
    }
}

export const jobsService = new JobsService()