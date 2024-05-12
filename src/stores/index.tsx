import { atom } from "jotai";
import { typeDataUser } from "@/types/User";

export const userEditeAtom = atom<typeDataUser>(null!)

export const loaderAtom = atom<Boolean>(false)