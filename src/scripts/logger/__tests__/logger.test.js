import { createLogger } from "../logger";

it('should return stored logs', () => {
    expect(createLogger().getLogs()).toEqual([])
})

it('should save log message', () => {
    const logger = createLogger('some name')
    logger.log('some message')
    const result = logger.getLogs();
    expect(result).toEqual(['log - some name - some message'])
})

it('should save errors', () => {
    const logger = createLogger('some name')
    logger.error('login failed')
    const result = logger.getLogs();
    expect(result).toEqual(['error - some name - login failed'])
})
