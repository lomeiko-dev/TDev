enum enumRoutePath {
    constructor = "constructor",
    test = "test",
    notfound = "notfound",
    main = "main",
}

export const routePathName: Record<enumRoutePath, string> = {
    [enumRoutePath.constructor]: "/constructor",
    [enumRoutePath.notfound]: "/notfound",
    [enumRoutePath.test]: "/test",
    [enumRoutePath.main]: "/"
}