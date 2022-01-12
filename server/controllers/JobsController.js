import { Auth0Provider } from "@bcwdev/auth0provider";
import { jobsService } from "../services/JobsService";
import BaseController from "../utils/BaseController";

export class JobsController extends BaseController {
    constructor() {
        super('api/jobs')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getById)
    }

    async getAll(req, res, next) {
        try {
            const jobs = await jobsService.getAll()
            res.send(jobs)
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            const jobs = await jobsService.getById(req.params.id)
            res.send(jobs)
        } catch (error) {

        }
    }

}
