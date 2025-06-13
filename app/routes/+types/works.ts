export interface MetaArgs {
  data: any;
  params: Record<string, string>;
  location: { pathname: string };
}

export interface Route {
  MetaArgs: MetaArgs;
  meta: (args: MetaArgs) => Array<{ name?: string; content?: string; title?: string }>;
}
