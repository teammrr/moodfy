import { generateGptResponse as generateGptResponse_ext } from 'wasp/ext-src/server/actions.js';
import { createTask as createTask_ext } from 'wasp/ext-src/server/actions.js';
import { deleteTask as deleteTask_ext } from 'wasp/ext-src/server/actions.js';
import { updateTask as updateTask_ext } from 'wasp/ext-src/server/actions.js';
import { stripePayment as stripePayment_ext } from 'wasp/ext-src/server/actions.js';
import { updateCurrentUser as updateCurrentUser_ext } from 'wasp/ext-src/server/actions.js';
import { updateUserById as updateUserById_ext } from 'wasp/ext-src/server/actions.js';
import { createFile as createFile_ext } from 'wasp/ext-src/server/actions.js';
export type GenerateGptResponse = typeof generateGptResponse_ext;
export declare const generateGptResponse: (args: any, context: any) => Promise<any>;
export type CreateTask = typeof createTask_ext;
export declare const createTask: (args: any, context: any) => Promise<any>;
export type DeleteTask = typeof deleteTask_ext;
export declare const deleteTask: (args: any, context: any) => Promise<any>;
export type UpdateTask = typeof updateTask_ext;
export declare const updateTask: (args: any, context: any) => Promise<any>;
export type StripePayment = typeof stripePayment_ext;
export declare const stripePayment: (args: any, context: any) => Promise<any>;
export type UpdateCurrentUser = typeof updateCurrentUser_ext;
export declare const updateCurrentUser: (args: any, context: any) => Promise<any>;
export type UpdateUserById = typeof updateUserById_ext;
export declare const updateUserById: (args: any, context: any) => Promise<any>;
export type CreateFile = typeof createFile_ext;
export declare const createFile: (args: any, context: any) => Promise<any>;