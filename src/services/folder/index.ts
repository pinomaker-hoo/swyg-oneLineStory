// ** Firebase Imports
import { db } from 'config/firebaseConfig'
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  getCountFromServer,
} from 'firebase/firestore'

const folderApi = {
  saveFolder: async (uid: string, name: string) => {
    await setDoc(doc(collection(db, 'folder')), {
      name,
      uid,
    })
  },
  getFolderList: async (uid: string) => {
    const querySnapshot = await getDocs(
      query(collection(db, 'folder'), where('uid', '==', uid))
    )
    return querySnapshot.docs.map((item) => ({
      name: String(item.data().name),
      uid: String(item.data().uid),
      id: item.id,
      count: 0,
    }))
  },
  deleteFolder: async (id: string) => {
    await deleteDoc(doc(db, 'folder', id))
  },
  getAllCount: async (uid: string) => {
    const count = await getCountFromServer(
      query(collection(db, 'album'), where('uid', '==', uid))
    )
    return count.data().count
  },
}

export const { saveFolder, getFolderList, deleteFolder, getAllCount } =
  folderApi