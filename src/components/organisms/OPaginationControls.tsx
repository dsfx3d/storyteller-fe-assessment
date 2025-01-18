"use client";
import {Button} from "../ui/button";
import {Form, FormField} from "~/components/ui/form";
import {Input} from "../ui/input";
import {MoveLeft, MoveRight} from "lucide-react";
import {Reader} from "fp-ts/lib/Reader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {flow} from "fp-ts/lib/function";
import {minmax} from "~/lib/minmax";
import {useEffect, useMemo} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

type TProps = {
  currentPage: number;
  totalPages: number;
  onChangePage: Reader<number, void>;
};

export function OPaginationControls({
  currentPage,
  totalPages,
  onChangePage,
}: TProps) {
  const setPage = useMemo(
    () => flow((page: number) => minmax(page, 1, totalPages), onChangePage),
    [onChangePage, totalPages],
  );
  const form = usePageForm(currentPage);

  const handleSubmit = form.handleSubmit(data => {
    setPage(+data.page);
  }, console.error);

  return (
    <Form {...form}>
      <div className="inline-flex gap-2 lg:gap-4 items-center text-sm">
        <form
          onSubmit={handleSubmit}
          className="inline-flex gap-2 lg:gap-4 items-center text-sm"
        >
          <FormField
            name="page"
            control={form.control}
            render={({field}) => (
              <>
                Page{" "}
                <Input
                  className="w-[60px] px-2 h-8"
                  min={1}
                  max={totalPages}
                  {...field}
                />
                of {totalPages}
              </>
            )}
          />{" "}
        </form>
        <Select>
          <SelectTrigger className="w-[110px] h-8">
            <SelectValue placeholder="20 Rows"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">20 Rows</SelectItem>
          </SelectContent>
        </Select>
        <div>
          <Button
            role="button"
            className="text-[#888a8f] rounded-r-none border-r-[0.5px] rounded-l w-8 h-8"
            variant="outline"
            onClick={() => setPage(+form.getValues("page") - 1)}
          >
            <MoveLeft />
          </Button>
          <Button
            role="button"
            className="text-[#888a8f] rounded-l-none border-l-[0.5px] rounded-r w-8 h-8"
            variant="outline"
            onClick={() => setPage(+form.getValues("page") + 1)}
          >
            <MoveRight />
          </Button>
        </div>
      </div>
    </Form>
  );
}

const schema = z.object({
  page: z.string(),
});

function usePageForm(currentPage: number) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {page: currentPage.toString()},
  });

  useEffect(() => {
    form.setValue("page", currentPage.toString());
  }, [form, currentPage]);

  return form;
}
