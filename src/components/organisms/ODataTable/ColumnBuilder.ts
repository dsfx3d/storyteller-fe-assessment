import {TColumnDef} from "./TColumnDef";
import type {CellContext, HeaderContext} from "@tanstack/react-table";

export class ColumnBuilder<TData> {
  // eslint-disable-next-line max-params
  private constructor(
    readonly columnName?: string,
    readonly accessorKey?: string,
    readonly headerCell?: React.FC<HeaderContext<TData, unknown>>,
    readonly headerClasses?: string,
    readonly isSortDisabled?: boolean,
    readonly dataCell?: React.FC<CellContext<TData, unknown>>,
  ) {}

  static column<TData>(): ColumnBuilder<TData> {
    return new ColumnBuilder<TData>();
  }

  name(columnName: string): ColumnBuilder<TData> {
    return new ColumnBuilder<TData>(
      columnName,
      this.accessorKey,
      this.headerCell,
      this.headerClasses,
      this.isSortDisabled,
      this.dataCell,
    );
  }

  accessor(accessorKey: string): ColumnBuilder<TData> {
    return new ColumnBuilder<TData>(
      this.columnName,
      accessorKey,
      this.headerCell,
      this.headerClasses,
      this.isSortDisabled,
      this.dataCell,
    );
  }

  header(
    headerCell: React.FC<HeaderContext<TData, unknown>>,
  ): ColumnBuilder<TData> {
    return new ColumnBuilder<TData>(
      this.columnName,
      this.accessorKey,
      headerCell,
      this.headerClasses,
      this.isSortDisabled,
      this.dataCell,
    );
  }

  headerClassName(className: string): ColumnBuilder<TData> {
    return new ColumnBuilder<TData>(
      this.columnName,
      this.accessorKey,
      this.headerCell,
      className,
      this.isSortDisabled,
      this.dataCell,
    );
  }

  disableSort(): ColumnBuilder<TData> {
    return new ColumnBuilder<TData>(
      this.columnName,
      this.accessorKey,
      this.headerCell,
      this.headerClasses,
      true,
      this.dataCell,
    );
  }

  cell(cell: React.FC<CellContext<TData, unknown>>): ColumnBuilder<TData> {
    return new ColumnBuilder<TData>(
      this.columnName,
      this.accessorKey,
      this.headerCell,
      this.headerClasses,
      this.isSortDisabled,
      cell,
    );
  }

  build(): TColumnDef<TData> {
    return {
      accessorKey: this.accessorKey!,
      header: this.headerCell,
      meta: {
        columnName: this.columnName,
        headerClassName: this.headerClasses,
        disableSort: this.isSortDisabled,
      },
      cell: this.dataCell,
    };
  }
}
