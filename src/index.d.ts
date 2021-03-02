declare global {
	interface KnitServices {}
	interface KnitControllers {}
}

export { default as RemoteProperty } from "./Knit/Util/Remote/RemoteProperty";
export { default as RemoteSignal } from "./Knit/Util/Remote/RemoteSignal";
export { default as ClientRemoteProperty } from "./Knit/Util/Remote/ClientRemoteProperty";
export { default as ClientRemoteSignal } from "./Knit/Util/Remote/ClientRemoteSignal";

export { default as KnitClient } from "./Knit/KnitClient";
export { default as KnitServer } from "./Knit/KnitServer";
export { default as Component } from "./Knit/Util/Component";
export * from "./Knit/Util/ComponentInternal";
export { default as Maid } from "./Knit/Util/Maid";
export { default as Signal } from "./Knit/Util/Signal";
export { default as Thread } from "./Knit/Util/Thread";

export { Service, Controller } from "./internal";
