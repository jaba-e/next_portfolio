export function ValidationError({ errors = [] }: { errors?: string[] }) {
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
