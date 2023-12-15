enum enumRoutePath {
    constructor = "constructor",
    test = "test",
    notfound = "notfound",
    info = "info",
}

export const routePathName: Record<enumRoutePath, string> = {
    [enumRoutePath.constructor]: "/constructor",
    [enumRoutePath.notfound]: "/notfound",
    [enumRoutePath.test]: "/test",
    [enumRoutePath.info]: "/info"
}