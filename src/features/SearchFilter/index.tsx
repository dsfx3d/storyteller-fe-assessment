"use client";
import {EFilterParams} from "~/lib/enums/EFilterParams";
import {Form, FormField} from "~/components/ui/form";
import {Input} from "~/components/ui/input";
import {useForm} from "react-hook-form";
import {useSearchParam} from "~/hooks/useSearchParam";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

type TProps = {
  className?: string;
  param: EFilterParams;
  as: typeof Input;
};

export function SearchFilter({className, param, as: InputField}: TProps) {
  const [query, setQuery] = useSearchParam(param);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: schema.parse({query}),
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(data => setQuery(data.query))}>
        <FormField
          name="query"
          control={form.control}
          render={({field}) => <InputField {...field} className={className} />}
        />
      </form>
    </Form>
  );
}

const schema = z.object({
  query: z.string(),
});
