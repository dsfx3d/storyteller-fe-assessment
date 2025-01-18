"use client";
import {EFilterParams} from "~/lib/enums/EFilterParams";
import {Form, FormField} from "~/components/ui/form";
import {Input} from "~/components/ui/input";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useSearchParam} from "~/hooks/useSearchParam";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

type TProps = {
  className?: string;
  param: EFilterParams;
  as: typeof Input;
  emptyValue?: string;
};

export function OSearchFilter({
  className,
  param,
  as: InputField,
  emptyValue,
}: TProps) {
  const [query, setQuery] = useSearchParam(param, {emptyValue});
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: schema.parse({query}),
  });
  useEffect(() => form.setValue("query", query), [query, form]);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(data => setQuery(data.query))}
        className={className}
      >
        <FormField
          name="query"
          control={form.control}
          render={({field}) => <InputField {...field} />}
        />
      </form>
    </Form>
  );
}

const schema = z.object({
  query: z.string(),
});
