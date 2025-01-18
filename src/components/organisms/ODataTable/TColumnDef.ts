import {type ColumnDef} from "@tanstack/react-table";
import {TColumnMeta} from "./TColumnMeta";

export type TColumnDef<TData> = Omit<ColumnDef<TData>, "meta"> & {
  accessorKey: string;
  meta: TColumnMeta;
};
