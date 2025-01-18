import {
  type Header,
  type OnChangeFn,
  type SortingState,
  flexRender,
  // eslint-disable-next-line import/named
  getCoreRowModel,
  // eslint-disable-next-line import/named
  getPaginationRowModel,
  // eslint-disable-next-line import/named
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {TColumnDef} from "./TColumnDef";
import {TColumnMeta} from "./TColumnMeta";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import React from "react";

type TProps<T> = {
  columns: TColumnDef<T>[];
  data: T[];
  sorting?: SortingState;
  onChangeSorting: OnChangeFn<SortingState>;
};

export function ODataTable<T>({
  columns,
  data,
  sorting,
  onChangeSorting,
}: TProps<T>) {
  const table = useReactTable({
    data,
    columns,
    onSortingChange: onChangeSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
    },
  });
  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              return (
                <TableHead
                  key={header.id}
                  className={toHeaderClassName(header)}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className="">
        {/* eslint-disable-next-line multiline-ternary */}
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map(row => (
            <TableRow key={row.id} className="odd:bg-white h-21">
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length}>No results.</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

function toHeaderClassName<T>(header: Header<T, unknown>): string | undefined {
  const meta = header.column.columnDef.meta as TColumnMeta | undefined;
  return meta?.headerClassName;
}
