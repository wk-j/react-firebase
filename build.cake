#addin "wk.StartProcess"

using PS = StartProcess.Processor;

Task("Start").Does(() => {
    PS.StartProcess("parcel client/index.html");
});

var target = Argument("target", "default");
RunTarget(target);