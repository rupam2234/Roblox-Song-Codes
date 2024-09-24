import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SearchFormSchema } from "./constants";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation"; // Import the useRouter hook

const SearchBar = () => {
  const router = useRouter(); // Initialize the router
  const form = useForm<z.infer<typeof SearchFormSchema>>({
    resolver: zodResolver(SearchFormSchema),
    defaultValues: {
      SongName: "",
    },
  });

  const onSubmit = (data: z.infer<typeof SearchFormSchema>) => {
    const trimmedSongName = data.SongName.trim();
    // Programmatically navigate to the search page with the query parameter
    router.push(`/search?SongName=${encodeURIComponent(trimmedSongName)}`);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="hidden sm:block"
        >
          <FormField
            name="SongName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input
                      placeholder="Type a song or artist name"
                      {...field}
                      autoComplete="off"
                      className="outline-none w-72 px-5 focus-visible:ring-0 bg-gray-100 text-black focus-visible:ring-transparent rounded-none flex-grow"
                    />
                    <Button
                      type="submit"
                      className="absolute right-2 p-2 bg-transparent hover:bg-transparent"
                    >
                      <SearchIcon className="text-gray-400" />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default SearchBar;
