import { ActivityInput } from "./components/ActivityInput";
import { HeaderContainer } from "./components/HeaderContainer";
import { AuthProvider } from "./components/AuthProvider";
import { AuthGuard } from "./components/AuthGuard";
import { ActivityList } from "./components/ActivityList";

export const App = () => {
  return (
    <AuthProvider>
      <div class="bg-neutral-200 px-2 min-h-screen">
        <AuthGuard>
          <div
            class="max-w-5xl mx-auto relative  min-h-screen py-5 grid place-items-end justify-items-stretch"
            style={{ "grid-auto-rows": "min-content 1fr min-content" }}
          >
            <div class="sticky top-5 mb-3 w-full">
              <HeaderContainer />
            </div>
            <ActivityList />
            <div class="sticky bottom-5 mt-3 w-full flex-initial">
              <ActivityInput />
            </div>
          </div>
        </AuthGuard>
      </div>
    </AuthProvider>
  );
};
