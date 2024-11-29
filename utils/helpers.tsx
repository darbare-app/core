import viewAddresses from "@/utils/viewAddresses.json";

export function deepCopy(obj: object) {
  return JSON.parse(JSON.stringify(obj));
}

export function getLink(viewName: string) {
  return `/${(viewAddresses as any)[viewName]}/`;
}
