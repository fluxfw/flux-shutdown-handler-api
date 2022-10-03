import { ShutdownHandlerService } from "../../Service/ShutdownHandler/Port/ShutdownHandlerService.mjs";

/** @typedef {import("../ShutdownHandler/ShutdownHandler.mjs").ShutdownHandler} ShutdownHandler */

export class ShutdownHandlerApi {
    /**
     * @type {ShutdownHandlerService | null}
     */
    #shutdown_handler_service = null;

    /**
     * @returns {ShutdownHandlerApi}
     */
    static new() {
        return new this();
    }

    /**
     * @private
     */
    constructor() {

    }

    /**
     * @returns {Promise<void>}
     */
    async init() {
        this.#shutdown_handler_service ??= this.#getShutdownHandlerService();
    }

    /**
     * @returns {ShutdownHandler}
     */
    getShutdownHandler() {
        return this.#shutdown_handler_service.getShutdownHandler();
    }

    /**
     * @returns {ShutdownHandlerService}
     */
    #getShutdownHandlerService() {
        return ShutdownHandlerService.new();
    }
}
