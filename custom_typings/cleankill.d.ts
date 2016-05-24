declare module 'cleankill' {
  /**
   * Calls the given function when the process is interrupted, giving
   * you a chance to cleanly shut down before the process exits. Call done()
   * when you're ready to shut down.
   *
   * As an escape hatch, if the user mashes interrupt, the process will be immediately killed.
   */
  export function onInterrupt(handler: (done: (message?:string)=>void)=>void): void;

  /**
   * Run the cleankill onInterrupt handlers without actually exiting.
   */
  export function close(whenDone: ()=>any): void;
}
