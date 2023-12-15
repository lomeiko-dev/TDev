enum enumRoutePath {
    CONSTRUCTOR = "constructor",
    TEST = "test",
    NOTFOUND = "notfound",
    MAIN = "main",
    INFO = 'info'
}

export const routePathName: Record<enumRoutePath, string> = {
    [enumRoutePath.CONSTRUCTOR]: "/constructor",
    [enumRoutePath.NOTFOUND]: "/notfound",
    [enumRoutePath.TEST]: "/test",
    [enumRoutePath.MAIN]: "/",
    [enumRoutePath.INFO]: "/info"
}