export function ValidationError({ errors = [] }: { errors?: string[] }) {
  console.log("errors", errors);
  return (
    <>
      {errors?.map((error: string, id: number) => (
        <p key={id} className="text-xs">
          {error}
        </p>
      ))}
    </>
  );
}
