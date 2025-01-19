"use client";
import {Select, SelectContent, SelectItem} from "~/components/ui/select";
import {useSearchParam} from "~/hooks/useSearchParam";

type TProps = Omit<
  React.ComponentProps<typeof Select>,
  "value" | "onValueChange"
> & {
  clearLabel?: string;
  param: string;
  items: string[];
  children: React.ReactNode;
};

export function OSelectFilter({
  clearLabel,
  items,
  param,
  children,
  ...selectProps
}: TProps) {
  const [value, setValue] = useSearchParam(param);
  return (
    <Select value={value} onValueChange={setValue} {...selectProps}>
      {children}
      <SelectContent>
        {clearLabel && <SelectItem value=" ">{clearLabel}</SelectItem>}
        {items.map((item, idx) => (
          <SelectItem key={idx} value={item} className="capitalize">
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
