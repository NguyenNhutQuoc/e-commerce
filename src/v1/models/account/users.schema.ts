import mongoose, { Schema, Document, ObjectId } from 'mongoose'
import { DOCUMENT_NAME as rolesDocumentName } from './roles.schema'
// Declare the Schema of the Mongo model
const DOCUMENT_NAME = 'user'
const COLLECTION_NAME = 'users'

interface IUser {
  firstName: string
  lastName: string
  userName: string
  email: string
  password: string
  role: ObjectId
}

interface IUserDocument extends IUser, Document {}

const userSchema: Schema<IUserDocument> = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: rolesDocumentName
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

const UserModel = mongoose.model<IUserDocument>(DOCUMENT_NAME, userSchema)

export { UserModel, IUserDocument, IUser, DOCUMENT_NAME }
