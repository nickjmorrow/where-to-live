import { handleCompression, handleCors, handleBodyRequestParsing } from './common';

export default [handleCors, handleBodyRequestParsing, handleCompression];
