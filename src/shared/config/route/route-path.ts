enum enumRoutePath {
    constructor = "constructor",
    test = "test",
    notfound = "notfound",
}

export const routePathName: Record<enumRoutePath, string> = {
    [enumRoutePath.constructor]: "/constructor",
    [enumRoutePath.notfound]: "/notfound",
    [enumRoutePath.test]: "/test",
}