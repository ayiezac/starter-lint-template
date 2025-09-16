/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
export type EventSource = {
  addEventListener: (
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: object,
  ) => void;
  removeEventListener: (
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: object,
  ) => void;
};
export type PostMessageWithOrigin = {
  postMessage: (
    message: any,
    targetOrigin: string,
    transfer?: Transferable[],
  ) => void;
};
export type Endpoint = {
  postMessage: (message: any, transfer?: Transferable[]) => void;
  start?: () => void;
} & EventSource;
export declare enum WireValueType {
  RAW = "RAW",
  PROXY = "PROXY",
  THROW = "THROW",
  HANDLER = "HANDLER",
}
export type RawWireValue = {
  id?: string;
  type: WireValueType.RAW;
  value: object;
};
export type HandlerWireValue = {
  id?: string;
  type: WireValueType.HANDLER;
  name: string;
  value: unknown;
};
export type WireValue = RawWireValue | HandlerWireValue;
export type MessageID = string;
export declare enum MessageType {
  GET = "GET",
  SET = "SET",
  APPLY = "APPLY",
  CONSTRUCT = "CONSTRUCT",
  ENDPOINT = "ENDPOINT",
  RELEASE = "RELEASE",
}
export type GetMessage = {
  id?: MessageID;
  type: MessageType.GET;
  path: string[];
};
export type SetMessage = {
  id?: MessageID;
  type: MessageType.SET;
  path: string[];
  value: WireValue;
};
export type ApplyMessage = {
  id?: MessageID;
  type: MessageType.APPLY;
  path: string[];
  argumentList: WireValue[];
};
export type ConstructMessage = {
  id?: MessageID;
  type: MessageType.CONSTRUCT;
  path: string[];
  argumentList: WireValue[];
};
export type EndpointMessage = {
  id?: MessageID;
  type: MessageType.ENDPOINT;
};
export type ReleaseMessage = {
  id?: MessageID;
  type: MessageType.RELEASE;
};
export type Message
  = | GetMessage
    | SetMessage
    | ApplyMessage
    | ConstructMessage
    | EndpointMessage
    | ReleaseMessage;
